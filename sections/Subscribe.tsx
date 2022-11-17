import { FC, FormEvent, Fragment, useState } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";

export const Subscribe: FC<{}> = () => {
  const [isLoading, setLoading] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (isLoading) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubscribed(true);
    }, 2000);
  }
  return (
    <div className="flex flex-col px-4 py-6 justify-center items-center gap-y-2 min-h-30vh relative">
      <div className="bg-black/90 absolute left-0 right-0 top-0 bottom-0 -z-10"></div>
      <div
        style={{ backgroundImage: 'url("/patterns.jpg")' }}
        className="absolute left-0 right-0 top-0 bottom-0 -z-20"
      />
      <h1 className="text-white text-2xl font-semibold">Subscribe</h1>
      {!subscribed ? (
        <Fragment>
          <p className="text-gray-100">Stay up to date on the Heritage Project.</p>
          <form className="flex items-center gap-x-3 mb-[20px]" onSubmit={handleSubmit}>
            <Input variant="dark" placeholder="example@email.com" required />
            <Button label="Subscribe" isLoading={isLoading} />
          </form>
        </Fragment>
      ) : (
        <p className="text-gray-100">Thanks for subcribing to the Heritage Project.</p>
      )}
    </div>
  );
};
