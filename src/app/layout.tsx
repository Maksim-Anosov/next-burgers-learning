import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { Header } from "../components";
import { cn } from "../shared";

const nunito = Nunito({
	subsets: ["cyrillic"],
	variable: "--font-nunito",
	weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
	title: "Next Burgers",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			{/* <QueryClientProvider client={queryClient}> */}
			<body
				className={cn("bg-slate-200 h-screen font-bold", nunito.className)}>
				<Header />
				<main>{children}</main>
			</body>
			{/* </QueryClientProvider> */}
		</html>
	);
}
