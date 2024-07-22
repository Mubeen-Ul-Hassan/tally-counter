export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full">
      <div className="bg-customDarkGray flex justify-between items-center px-60 py-3 text-gray-400 text-sm">
        <p>
          © 2024 Made by{" "}
          <a
            href="https://www.linkedin.com/in/mubeen-ul-hassan/"
            className="underline underline-offset-4"
            target="_blank"
          >
            Mubeen Ul Hassan
          </a>{" "}
          in Okara, Pakistan.
        </p>

        <ul className="flex gap-4 [&_li]:underline [&_li]:underline-offset-4">
          <li>Privacy Policy</li>
          <li>Terms of Use</li>
          <li>Cookie Policy</li>
          <li>Contact</li>
        </ul>
      </div>
    </footer>
  );
}
