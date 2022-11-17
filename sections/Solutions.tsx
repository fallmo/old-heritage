import Image from "next/image";
import { FC, Fragment, useState } from "react";
import { Button } from "../components/Button";
import { cl } from "../utils";

export const Solutions: FC<{}> = () => {
  const [optionSelected, setOptionSelected] = useState<"openshift" | "openstack" | "ceph">("openshift");
  return (
    <div id="solutions" className="flex flex-col items-center justify-center py-6 px-2 min-h-90vh relative">
      <h1 className="text-3xl text-red-2 font-semibold text-center mb-7">Our Solutions</h1>
      <div className="flex flex-col md:flex-row gap-y-3 justify-center items-center gap-x-5">
        <div className="flex flex-col items-center gap-y-3 w-[330px]">
          <InfoOption
            title="OpenShift"
            subTitle="Dedicated"
            image="/openshift-logo.png"
            isSelected={optionSelected === "openshift"}
            selectOption={() => setOptionSelected("openshift")}
          />
          <InfoOption
            title="OpenStack"
            subTitle="Coming Soon"
            image="/openstack-logo.png"
            isSelected={optionSelected === "openstack"}
            selectOption={() => setOptionSelected("openstack")}
          />
          <InfoOption
            title="Ceph Storage"
            subTitle="Coming Soon"
            image="/ceph-logo.png"
            isSelected={optionSelected === "ceph"}
            selectOption={() => setOptionSelected("ceph")}
          />
        </div>
        <div className="flex flex-col md:w-[390px] gap-y-4">
          {optionSelected === "openshift" && (
            <InfoBlock
              title="Red Hat OpenShift"
              description="Red Hat® OpenShift® is an enterprise-ready Kubernetes container platform built for an open
            hybrid cloud strategy."
              moreLink="https://www.redhat.com/en/technologies/cloud-computing/openshift"
              actionLink="https://cluster.heritage.africa"
            />
          )}
          {optionSelected === "openstack" && (
            <InfoBlock
              title="Red Hat OpenStack"
              description="Red Hat® OpenStack® Platform is a cloud computing platform that virtualizes resources from industry-standard hardware, organizes those resources into clouds, and manages them so users can access what they need—when they need it."
              moreLink="https://www.redhat.com/en/technologies/linux-platforms/openstack-platform"
              actionLink=""
            />
          )}
          {optionSelected === "ceph" && (
            <InfoBlock
              title="Ceph Storage"
              description="Red Hat® Ceph® Storage is an open, massively scalable, simplified storage solution for modern data pipelines. Engineered for data analytics, artificial intelligence/machine learning (AI/ML), and emerging workloads, Red Hat Ceph Storage delivers software-defined storage on your choice of industry-standard hardware."
              moreLink="https://www.redhat.com/en/technologies/storage/ceph"
              actionLink=""
            />
          )}
        </div>
      </div>
    </div>
  );
};

function InfoBlock(props: { title: string; description: string; moreLink: string; actionLink: string }) {
  return (
    <Fragment>
      <h1 className="font-semibold text-2xl">{props.title}</h1>
      <div className="flex flex-col gap-y-1">
        <p className="text-lg">{props.description}</p>
        <a className="underline cursor-pointer hover:text-gray-800" target="_blank" href={props.moreLink}>
          Learn More
        </a>
      </div>
      {props.actionLink ? (
        <a href={props.actionLink} className="w-full" target="_blank">
          <Button className="w-full" label="Try it Now" />
        </a>
      ) : (
        <Button label="Coming Soon" disabled />
      )}
    </Fragment>
  );
}

function InfoOption(props: {
  title: string;
  subTitle: string;
  image: string;
  isSelected: boolean;
  selectOption: () => void;
}) {
  const classNames = cl(
    {
      "ring-inset ring-1 ring-gray-100 shadow-sm hover:shadow-md": !props.isSelected,
    },
    { "ring-inset ring-4 ring-red-1 shadow-md": props.isSelected },
    "bg-white grid grid-cols-5 gap-x-3 w-11/12 h-[120px] rounded-md cursor-default transition-all duration-200"
  );
  return (
    <div className={classNames} onClick={props.selectOption}>
      <div className="col-span-2 flex items-center justify-end">
        <Image src={props.image} height={90} width={90} />
      </div>
      <div className="col-span-3 flex flex-col justify-center">
        <p className="text-2xl font-semibold">{props.title}</p>
        <p className="text-lg">{props.subTitle}</p>
      </div>
    </div>
  );
}
