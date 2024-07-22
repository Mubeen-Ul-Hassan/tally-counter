export default function CardButton({
  buttonContent,
}: {
  buttonContent: string;
}) {
  return (
    <section>
      <div className="rounded-lg bg-customGreen hover:bg-customLigthGreen text-white font-bold px-9 py-4 text-center mt-5">
        <button>{buttonContent}</button>
      </div>
    </section>
  );
}
