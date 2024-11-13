import { cn } from "@/lib/utils";
import { Container } from "./container";
import Link from "next/link";
import Image from "next/image";
import logo from "../assets/logo.svg";

interface Props {
	className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
	return (
		<header className={cn(" border-b shadow-2xl", className)}>
			<Container className="flex items-center justify-between py-8">
				<div className="flex items-center gap-4">
					<Link href="/">Конструктор</Link>
					<Link href="/">Лента заказов</Link>
				</div>
          <Image src={logo} alt="logo" width={300} />
          <div>
          <Link href="/">Личный кабинет</Link>
          </div>
			</Container>
		</header>
	);
};
