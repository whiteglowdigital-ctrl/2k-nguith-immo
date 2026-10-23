import logo from '../assets/logo-2k-nguith.webp';
import { cn } from '../lib/utils.js';

export default function Logo({ className = 'h-10' }) {
  return <img src={logo} width="320" height="260" alt="Logo 2K Nguith Immo" className={cn('w-auto', className)} />;
}
