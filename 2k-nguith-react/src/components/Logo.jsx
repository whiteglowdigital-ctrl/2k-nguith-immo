import logo from '../assets/logo-2k-nguith.webp';
import { cn } from '../lib/utils.js';

export default function Logo({ className = 'p-1.5', imgClassName = 'h-10' }) {
  return (
    <span className={cn('inline-flex rounded-lg bg-white', className)}>
      <img src={logo} width="320" height="260" alt="Logo 2K Nguith Immo" className={cn('w-auto', imgClassName)} />
    </span>
  );
}
