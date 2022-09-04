import { prefix } from "../lib/utils";

export default function favicon() {
  return (
    <>
      <link
        type="image/png"
        sizes="16x16"
        rel="icon"
        href={`${prefix}/favicon/favicon-16.png`}
      />
      <link
        type="image/png"
        sizes="32x32"
        rel="icon"
        href={`${prefix}/favicon/favicon-32.png`}
      />
      <link
        type="image/png"
        sizes="96x96"
        rel="icon"
        href={`${prefix}/favicon/favicon-96.png`}
      />
    </>
  );
}
