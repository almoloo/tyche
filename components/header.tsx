import Link from 'next/link';
import React from 'react';
import { Button } from '@/components/ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Image from 'next/image';
import {
	CircleHelpIcon,
	CircleUserRoundIcon,
	HistoryIcon,
	HomeIcon,
	TicketIcon,
} from 'lucide-react';

const Header = () => {
	return (
		<header className="flex items-center justify-between px-5 py-3 border-b bg-slate-50">
			<Link
				href="/"
				className="font-extrabold text-xl text-neutral-900 tracking-wide uppercase"
			>
				<Image
					src="/logo.png"
					alt="Tyche"
					width={137}
					height={35}
				/>
			</Link>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button
						variant="ghost"
						className="p-0 rounded-full"
					>
						<Avatar>
							<AvatarImage
								src="https://placehold.co/40x40"
								alt="User"
							/>
							<AvatarFallback>AM</AvatarFallback>
						</Avatar>
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent>
					<DropdownMenuItem asChild>
						<Link
							href="/"
							className="cursor-pointer"
						>
							<HomeIcon className="w-4 h-4 mr-2" />
							Home
						</Link>
					</DropdownMenuItem>
					<DropdownMenuItem asChild>
						<Link
							href="/buy"
							className="cursor-pointer"
						>
							<TicketIcon className="w-4 h-4 mr-2" />
							Buy Ticket
						</Link>
					</DropdownMenuItem>
					<DropdownMenuItem asChild>
						<Link
							href="/rounds"
							className="cursor-pointer"
						>
							<HistoryIcon className="w-4 h-4 mr-2" />
							Past Rounds
						</Link>
					</DropdownMenuItem>
					<DropdownMenuSeparator />
					<DropdownMenuItem asChild>
						<Link
							href="/user"
							className="cursor-pointer"
						>
							<CircleUserRoundIcon className="w-4 h-4 mr-2" />
							Account
						</Link>
					</DropdownMenuItem>
					<DropdownMenuItem asChild>
						<Link
							href="/help"
							className="cursor-pointer"
						>
							<CircleHelpIcon className="w-4 h-4 mr-2" />
							Help
						</Link>
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</header>
	);
};

export default Header;
