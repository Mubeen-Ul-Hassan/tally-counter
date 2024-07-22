export default function CardButton({
  buttonContent,
}: {
  buttonContent: string;
}) {
  return (
    <section>
      <div className="rounded-lg bg-customGreen text-white font-bold p-4 text-center mt-5">
        <button>{buttonContent}</button>
      </div>
    </section>
  );
}
