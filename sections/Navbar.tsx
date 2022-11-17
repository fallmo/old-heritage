import { FC } from "react";
import Image from "next/image";
import { Button } from "../components/Button";
import { useTranslation } from "../providers/i18n";

export const Navbar: FC<{}> = () => {
  const translate = useTranslation();

  return (
    <div className="bg-white flex items-center justify-between py-2 px-4">
      <div className="hidden md:block -mb-1">
        <Image src="/accel-logo.png" height={45} width={233} />
      </div>
      <div className="flex items-center gap-x-5 md:gap-x-10 justify-between flex-1 md:flex-initial">
        <div className="flex items-center gap-x-5 md:gap-x-10">
          <NavLink title="Solutions" href="#solutions" />
          <NavLink title="Vision" href="#vision" />
        </div>
        <Button label={translate({ en: "Contact Us", fr: "Contactez Nous" })} size="sm" variant="dark" />
      </div>
    </div>
  );
};

function NavLink(props: { title: string; href?: string }) {
  return (
    <a href={props.href} className="text-lg text-gray-700 hover:text-gray-600 cursor-pointer">
      {props.title}
      <i className="ml-2 fas fa-chevron-down text-sm"></i>
    </a>
  );
}
