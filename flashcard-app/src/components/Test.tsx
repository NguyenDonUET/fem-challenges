import toast from "react-hot-toast";

const notify = () => toast("Here is your toast.");

export default function Test() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <button onClick={notify}>Make me a toast</button>
    </div>
  );
}
