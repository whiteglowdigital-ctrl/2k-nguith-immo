(function () {
  /* ===== À MODIFIER : un seul numéro pour tout le site ===== */
  var CONFIG = {
    whatsapp: "221XXXXXXXXX",            // format international sans + ni espaces, ex. 221771234567
    telephone: "+221XXXXXXXXX",          // pour le bouton « Appeler »
    affichage: "[Numéro à confirmer]",   // tel qu’il s’affiche, ex. 77 123 45 67
    maps: "Touba Automobile, Route de Sindia, Keur Massamba Gueye, Thiès, Sénégal"
  };

  function $(s, root) { return (root || document).querySelector(s); }
  function $$(s, root) { return Array.prototype.slice.call((root || document).querySelectorAll(s)); }
  function waUrl(msg) { return "https://wa.me/" + CONFIG.whatsapp + (msg ? "?text=" + encodeURIComponent(msg) : ""); }

  $$(".js-phone").forEach(function (el) { el.textContent = CONFIG.affichage; });
  $$(".js-tel").forEach(function (el) { el.href = "tel:" + CONFIG.telephone; });
  $$(".js-wa").forEach(function (el) {
    el.href = waUrl(el.getAttribute("data-msg") || "Bonjour Touba Automobile, ");
    el.target = "_blank"; el.rel = "noopener";
  });
  $$(".js-maps").forEach(function (el) {
    el.href = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(CONFIG.maps);
    el.target = "_blank"; el.rel = "noopener";
  });

  /* Menu mobile */
  var burger = $("#burger"), mnav = $("#mobile-nav");
  if (burger && mnav) {
    var setMenu = function (open) {
      burger.setAttribute("aria-expanded", String(open));
      burger.setAttribute("aria-label", open ? "Fermer le menu" : "Ouvrir le menu");
      $("use", burger).setAttribute("href", open ? "#i-x" : "#i-menu");
      mnav.hidden = !open;
    };
    burger.addEventListener("click", function () { setMenu(mnav.hidden); });
    mnav.addEventListener("click", function (e) { if (e.target.closest("a")) setMenu(false); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape" && !mnav.hidden) { setMenu(false); burger.focus(); } });
  }

  /* Dates : pas de date passée, fermé le lundi pour les rendez-vous */
  var now = new Date(); now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
  var today = now.toISOString().slice(0, 10);
  $$('input[type="date"]').forEach(function (el) { el.min = today; });
  function frDate(v) {
    var d = new Date(v + "T12:00:00");
    return isNaN(d) ? v : d.toLocaleDateString("fr-FR", { weekday: "long", day: "numeric", month: "long", year: "numeric" });
  }
  $$("input[data-no-monday]").forEach(function (el) {
    el.addEventListener("change", function () {
      var d = new Date(el.value + "T12:00:00");
      el.setCustomValidity(d.getDay() === 1 ? "Nous sommes fermés le lundi. Choisissez un autre jour." : "");
    });
  });
  var du = $("#loc-du"), au = $("#loc-au");
  if (du && au) {
    du.addEventListener("change", function () { au.min = du.value || today; });
    au.addEventListener("change", function () {
      au.setCustomValidity(du.value && au.value < du.value ? "La date de fin doit être après la date de début." : "");
    });
  }

  /* Boutons « Réserver » : présélectionne le service dans le formulaire de la page */
  var sel = $("#r-service");
  $$("[data-service]").forEach(function (a) {
    a.addEventListener("click", function () {
      if (!sel) return;
      sel.value = a.getAttribute("data-service");
      setTimeout(function () { var n = $("#r-nom"); if (n) n.focus({ preventScroll: true }); }, 450);
    });
  });

  /* Formulaires -> message WhatsApp pré-rempli (rien n’est enregistré sur le site) */
  function setError(field, msg) {
    var box = field.closest(".field"); if (!box) return;
    var err = $(".err", box);
    if (!msg) {
      if (err) err.remove();
      field.removeAttribute("aria-invalid");
      field.setAttribute("aria-describedby", (field.getAttribute("aria-describedby") || "").replace(field.id + "-err", "").trim());
      if (!field.getAttribute("aria-describedby")) field.removeAttribute("aria-describedby");
      return;
    }
    if (!err) { err = document.createElement("p"); err.className = "err"; err.id = field.id + "-err"; box.appendChild(err); }
    err.textContent = msg;
    field.setAttribute("aria-invalid", "true");
    var d = (field.getAttribute("aria-describedby") || "").replace(err.id, "").trim();
    field.setAttribute("aria-describedby", (d + " " + err.id).trim());
  }
  function errorText(f) {
    if (f.validity.valueMissing) return f.tagName === "SELECT" ? "Choisissez une option." : "Ce champ est nécessaire.";
    return f.validationMessage;
  }

  $$("form[data-wa-intro]").forEach(function (form) {
    var fields = $$("input[name], select[name], textarea[name]", form);
    fields.forEach(function (f) {
      ["input", "change"].forEach(function (ev) { f.addEventListener(ev, function () { if (f.checkValidity()) setError(f, ""); }); });
    });
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var firstBad = null;
      fields.forEach(function (f) {
        if (!f.checkValidity()) { setError(f, errorText(f)); firstBad = firstBad || f; } else setError(f, "");
      });
      if (firstBad) { firstBad.focus(); return; }

      var lines = [form.getAttribute("data-wa-intro"), ""];
      fields.forEach(function (f) {
        var v = f.value.trim(); if (!v) return;
        lines.push(f.name + " : " + (f.type === "date" ? frDate(v) : v));
      });
      var photo = $('input[type="file"]', form);
      if (photo && photo.files.length) lines.push("", "Je vous envoie une photo juste après ce message.");
      var url = waUrl(lines.join("\n"));

      var out = $(".form-result", form);
      out.innerHTML = "";
      var p = document.createElement("p"); p.textContent = "Votre message est prêt.";
      var a = document.createElement("a");
      a.className = "btn btn-primary"; a.href = url; a.target = "_blank"; a.rel = "noopener"; a.textContent = "Ouvrir WhatsApp";
      out.appendChild(p); out.appendChild(a); out.hidden = false;
      try { window.open(url, "_blank", "noopener"); } catch (err) {}
    });
  });

  /* Photo de la panne : aperçu local uniquement */
  var ph = $("#d-photo"), prev = $("#d-photo-preview");
  if (ph && prev) {
    ph.addEventListener("change", function () {
      prev.innerHTML = "";
      var f = ph.files[0]; if (!f) return;
      var img = document.createElement("img"); img.alt = "Aperçu de la photo choisie"; img.src = URL.createObjectURL(f);
      var s = document.createElement("span"); s.textContent = f.name;
      prev.appendChild(img); prev.appendChild(s);
    });
  }

  /* Avant / après */
  $$(".ba-frame").forEach(function (fr) {
    var r = $(".ba-range", fr);
    function upd() { fr.style.setProperty("--pos", r.value + "%"); }
    r.addEventListener("input", upd); upd();
  });

  /* Filtres des voitures à vendre */
  var list = $("#sale-list");
  if (list) {
    var cars = $$(".car", list), fm = $("#f-marque"), fb = $("#f-budget"), count = $("#f-count"), empty = $("#sale-empty");
    Array.from(new Set(cars.map(function (c) { return c.dataset.marque; }))).sort().forEach(function (m) {
      var o = document.createElement("option"); o.value = m; o.textContent = m; fm.appendChild(o);
    });
    var filter = function () {
      var m = fm.value, b = fb.value.split("-"), min = +b[0] || 0, max = b[1] ? +b[1] : Infinity, n = 0;
      cars.forEach(function (c) {
        var prix = c.dataset.prix ? +c.dataset.prix : null;   // prix vide = voiture toujours affichée
        var ok = (!m || c.dataset.marque === m) && (!fb.value || prix === null || (prix >= min && prix < max));
        c.hidden = !ok; if (ok) n++;
      });
      count.textContent = n + (n > 1 ? " voitures" : " voiture");
      empty.hidden = n > 0;
    };
    fm.addEventListener("change", filter); fb.addEventListener("change", filter); filter();
  }

  /* Carte : chargée seulement sur demande (aucun cookie Google avant le clic) */
  var mapBtn = $("#map-load");
  if (mapBtn) {
    mapBtn.addEventListener("click", function () {
      var f = document.createElement("iframe");
      f.title = "Carte : Touba Automobile, Route de Sindia, Thiès";
      f.src = "https://www.google.com/maps?q=" + encodeURIComponent(CONFIG.maps) + "&output=embed";
      $("#map-box").appendChild(f);
    });
  }
})();
