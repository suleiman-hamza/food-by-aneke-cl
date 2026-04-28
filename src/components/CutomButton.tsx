import type { JSX } from "react/jsx-dev-runtime";

type buttonProps = JSX.IntrinsicElements["button"];

export default function CustomButton(props: buttonProps) {
  return (
    <button type="button" className="mt-4 rounded-sm p-2 bg-indigo-400 cursor-pointer" {...props}>
      click me
    </button>
  );
}
