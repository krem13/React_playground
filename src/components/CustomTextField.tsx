import { useState } from "react";

export default function CustomTextField() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setResult("");
    try {
      const words = input.split(/\s+/);
      const correctedWords = await Promise.all(
        words.map(async (word) => {
          if (!word) return "";
          const response = await fetch(
            `https://kodeopgave2.azurewebsites.net/api/corrections/${encodeURIComponent(
              word
            )}`
          );
          if (response.ok) {
            const data = await response.text();
            return data ? data : word;
          } else {
            return word;
          }
        })
      );
      setResult(correctedWords.join(" "));
    } catch (error) {
      setResult("Der opstod en fejl ved forbindelsen til API'et.");
    }
    setLoading(false);
  }

  return (
    <>
      <header
        id="header"
        className="w-full border-di border-b max-w-[1680px] p-3"
      >
        <div>
          <a
            href="https://www.danskindustri.dk"
            target="_blank"
            title="DI website"
            aria-label="Dansk Industri"
            rel="noreferrer"
          >
            <img
              src="data:image/png;base64,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"
              alt="DI logo"
              className="h-10"
            />
          </a>
        </div>
      </header>
      <main>
        <section id="content" className="max-w-[1150px] px-3 py-8 text-start">
          <form onSubmit={handleSubmit}>
            <h1 id="headline" className="text-[40px] font-bold mb-4 uppercase">
              Stavekontrol
            </h1>
            <div>
              <div className="flex flex-col mb-4">
                <label htmlFor="textarea" className="font-bold mb-1">
                  Tekst
                </label>
                <textarea
                  id="textarea"
                  title="textarea"
                  className="form-textarea border border-color-di h-[100px] p-2"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                ></textarea>
              </div>
              <div>
                <label className="font-bold mb-1">Korrigeret</label>
                <div
                  id="resultarea"
                  className="border border-blue-500 p-2 h-[100px]"
                >
                  {loading ? "Henter korrektioner..." : result}
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="button button--primary bg-color-di1"
                >
                  Oversæt
                </button>
              </div>
            </div>
          </form>
        </section>
      </main>
      <footer id="footer">
        <div>H. C. Andersens Boulevard 18, 1553 København V</div>
      </footer>
    </>
  );
}
