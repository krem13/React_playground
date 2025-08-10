import { ReactNode, useState } from "react";

export default function CustomTextField() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<ReactNode>("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setResult("");
    try {
      const words = input.split(/\s+/);
      const correctedWords = await Promise.all(
        words.map(async (word, idx) => {
          if (!word) return "";
          const response = await fetch(
            `https://kodeopgave2.azurewebsites.net/api/corrections/${encodeURIComponent(
              word
            )}`
          );
          if (response.ok) {
            const data = await response.text();
            return data ? (
              <span key={idx} className="text-red-500">
                {data}{" "}
              </span>
            ) : (
              word + " "
            );
          } else {
            return word + " ";
          }
        })
      );
      setResult(correctedWords);
    } catch (error) {
      setResult("Der opstod en fejl ved forbindelsen til API'et.");
    }
    setLoading(false);
  }

  return (
    <>
      <div className="border-[2px] border-di1 rounded-lg p-6 sm:w-[600px] w-full">
        <header className="w-full border-di border-b max-w-[1680px] p-3">
          <div>
            <a
              href="https://github.com"
              target="_blank"
              title="GitHub website"
              aria-label="GitHub"
              rel="noreferrer"
            >
              <svg
                height="32"
                aria-hidden="true"
                viewBox="0 0 24 24"
                version="1.1"
                width="32"
                data-view-component="true"
                className="octicon octicon-mark-github sm:h-10 h-8"
              >
                <path d="M12 1C5.923 1 1 5.923 1 12c0 4.867 3.149 8.979 7.521 10.436.55.096.756-.233.756-.522 0-.262-.013-1.128-.013-2.049-2.764.509-3.479-.674-3.699-1.292-.124-.317-.66-1.293-1.127-1.554-.385-.207-.936-.715-.014-.729.866-.014 1.485.797 1.691 1.128.99 1.663 2.571 1.196 3.204.907.096-.715.385-1.196.701-1.471-2.448-.275-5.005-1.224-5.005-5.432 0-1.196.426-2.186 1.128-2.956-.111-.275-.496-1.402.11-2.915 0 0 .921-.288 3.024 1.128a10.193 10.193 0 0 1 2.75-.371c.936 0 1.871.123 2.75.371 2.104-1.43 3.025-1.128 3.025-1.128.605 1.513.221 2.64.111 2.915.701.77 1.127 1.747 1.127 2.956 0 4.222-2.571 5.157-5.019 5.432.399.344.743 1.004.743 2.035 0 1.471-.014 2.654-.014 3.025 0 .289.206.632.756.522C19.851 20.979 23 16.854 23 12c0-6.077-4.922-11-11-11Z"></path>
              </svg>
            </a>
          </div>
        </header>
        <main>
          <section className="max-w-[1150px] px-3 py-8 text-start">
            <form onSubmit={handleSubmit}>
              <h1 className="sm:text-[40px] text-[30px] font-bold mb-4 uppercase">
                Stavekontrol
              </h1>
              <div className="sm:flex block">
                <div className="flex flex-col mb-4 sm:w-1/2 w-full sm:pr-3 pr-0">
                  <label htmlFor="textarea" className="font-bold mb-1">
                    Tekst
                  </label>
                  <textarea
                    title="textarea"
                    className="border border-di h-[100px] p-2"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                  ></textarea>
                </div>
                <div className="flex flex-col mb-4 sm:w-1/2 w-full">
                  <label className="font-bold mb-1">Korrigeret</label>
                  <div className="border border-di p-2 h-[100px] bg-di">
                    {loading ? "Henter korrektioner..." : result}
                  </div>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="button button--primary bg-di1 text-white font-bold py-5 px-10 rounded-[4px] my-3"
                >
                  Oversæt
                </button>
              </div>
            </form>
          </section>
        </main>
        <footer className="w-full max-w-[1680px] p-3 text-center bg-black text-white">
          <div>© 2025 Kremena Dimitrova</div>
        </footer>
      </div>
    </>
  );
}
