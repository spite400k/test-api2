import { AiOutlineFund, AiOutlineInfoCircle } from 'react-icons/ai';
import { FiTag } from 'react-icons/fi';
import { LinkType } from '@/types/link';

export const links: LinkType[] = [
  { name: 'TOP', href: '/', icon: <AiOutlineFund /> },
  { name: 'GOAT FCの哲学', href: '/philosophy', icon: <AiOutlineFund /> },
  { name: '試合動画', href: '/gamemovie', icon: <AiOutlineFund /> },
  { name: '選手紹介', href: '/memberIntro', icon: <AiOutlineFund /> },
  { name: 'tags', href: '/tags', icon: <FiTag /> },
  { name: 'about', href: '/about', icon: <AiOutlineInfoCircle /> },

];
