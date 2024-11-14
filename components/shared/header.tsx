import { cn } from "@/lib/utils";
import { Container } from "./container";
import Link from "next/link";
import Image from "next/image";
import logo from "../assets/logo.svg";
import { ListChecks, SquareMenu, UserCheck, UserPlus } from "lucide-react";

interface Props {
	className?: string;
	user: boolean;
}

export const Header: React.FC<Props> = ({ className, user }) => {
	return (
		<header className={cn(" shadow-2xl", className)}>
			<Container className="flex items-center justify-between py-8">
				<div className="flex items-center gap-4">
					<Link
						className="flex items-center gap-1 hover:scale-105 transition"
						href="/"
					>
						<SquareMenu />
						<span>Конструктор</span>
					</Link>
					<Link
						className="flex items-center gap-1 hover:scale-105 transition"
						href="/"
					>
						<ListChecks />
						<span>Лента заказов</span>
					</Link>
				</div>

				<Link className="hover:scale-105 transition" href="/">
					<Image
						src={logo}
						alt="logo"
						width={300}
					/>
				</Link>

				<div>
					<Link
						className="flex items-center gap-1 hover:scale-105 transition"
						href="/"
					>
						{user ? <UserCheck /> : <UserPlus />}
						<span className="">Личный кабинет</span>
					</Link>
				</div>
			</Container>
		</header>
	);
};
