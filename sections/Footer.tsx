import { FC } from "react";

export const Footer: FC<{}> = () => {
  return (
    <div className="relative">
      <div className="bg-red-1/95 absolute left-0 right-0 top-0 bottom-0 -z-10"></div>
      <div
        style={{ backgroundImage: 'url("/patterns.jpg")' }}
        className="absolute left-0 right-0 top-0 bottom-0 -z-20"
      />
      <div className="flex flex-col items-center gap-y-4 md:flex-row md:items-start md:justify-center md:gap-x-2 p-3 py-6 text-center md:text-left">
        <div className="w-[210px] flex flex-col gap-x-1">
          <p className="text-xl text-white font-semibold mb-2">Company</p>
          <FooterLink title="About" />
          <FooterLink title="Services" />
          <FooterLink title="News" />
          <FooterLink title="Contact" />
        </div>
        <div className="w-[210px] flex flex-col gap-x-1">
          <p className="text-xl text-white font-semibold mb-2">Solutions</p>
          <FooterLink title="OpenShift" />
          <FooterLink title="OpenStack" />
          <FooterLink title="Ceph Storage" />
        </div>
        <div className="w-[210px] flex flex-col gap-x-1">
          <p className="text-xl text-white font-semibold mb-2">Info</p>
          <p className="text-white">
            <span className="font-semibold">Adress: </span>165 virage, Rte de l'Aeroport, Dakar, Senegal
          </p>
          <p className="text-white">
            <span className="font-semibold">Phone: </span>+221 33 820 83 83
          </p>
          <p className="text-white">
            <span className="font-semibold">Website: </span>
            <a
              className="underline text-gray-100 hover:text-gray-200 cursor-pointer"
              href="https://www.accel-tech.net"
              target="_blank"
            >
              www.accel-tech.net
            </a>
          </p>
        </div>
        <div className="w-[210px] flex flex-col gap-x-1">
          <p className="text-xl text-white font-semibold mb-2">Website</p>
          <p className="text-gray-200 pl-1">
            © 2022 Heritage Africa <br />
            All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
};

function FooterLink(props: { title: string; href?: string }) {
  return (
    <a href={props.href} className="text-lg text-gray-100 hover:text-white cursor-pointer">
      {props.title}
    </a>
  );
}
