import { cn } from "@/lib/utils";
import { Container } from "./container";
import Link from "next/link";
import Image from "next/image";
import logo from "../assets/logo.svg";
import { UserCheck, UserPlus } from "lucide-react";

interface Props {
	className?: string;
	user: boolean;
}

export const Header: React.FC<Props> = ({ className, user }) => {
	return (
		<header className={cn(" shadow-2xl", className)}>
			<Container className="flex items-center justify-between py-8">
				<div className="flex items-center gap-4">
					<Link href="/">Конструктор</Link>
					<Link href="/">Лента заказов</Link>
				</div>
				<Image src={logo} alt="logo" width={300} />
				<div>
					<Link className="flex items-center gap-1 group" href="/">
						{user ? <UserCheck /> : <UserPlus />}
						<span className="group-hover:">Личный кабинет</span>
					</Link>
				</div>
			</Container>
		</header>
	);
};
