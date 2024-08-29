import { CodeIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
	return (
		<footer className="flex items-center justify-center text-xs py-2 bg-slate-50">
			<CodeIcon className="w-3 h-3 mr-1 text-neutral-500" />
			<span>Designed & developed by</span>
			<Link
				href="https://github.com/almoloo"
				className="ml-1 text-violet-500 font-mono"
			>
				@almoloo
			</Link>
		</footer>
	);
};

export default Footer;
