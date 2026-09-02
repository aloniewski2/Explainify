export const LayoutContainer = () => {
    return (
      <div className="bg-white box-border caret-transparent flex flex-col h-[952px] outline-[oklab(0.708_0_0_/_0.5)]">
        <aside className="fixed bg-[oklch(0.985_0.002_247.839)] box-border caret-transparent h-full outline-[oklab(0.708_0_0_/_0.5)] w-72 z-50 border-[oklab(0.928_-0.000571842_-0.00597269_/_0.8)] border-r border-solid left-0 top-0">
          <div className="box-border caret-transparent flex flex-col h-full outline-[oklab(0.708_0_0_/_0.5)]">
            <div className="items-center box-border caret-transparent flex justify-between outline-[oklab(0.708_0_0_/_0.5)] border-[oklab(0.928_-0.000571842_-0.00597269_/_0.8)] p-4 border-b border-solid">
              <button className="text-[oklch(0.21_0.034_264.665)] items-center bg-white caret-transparent gap-x-2 flex basis-[0%] grow justify-center outline-[oklab(0.708_0_0_/_0.5)] gap-y-2 border border-[oklab(0.928_-0.000571842_-0.00597269_/_0.8)] px-4 py-2.5 rounded-[14px] border-solid">
                <img
                  src="https://c.animaapp.com/mhf1kdmbCmGjqZ/assets/icon-4.svg"
                  alt="Icon"
                  className="box-border caret-transparent h-4 outline-[oklab(0.708_0_0_/_0.5)] w-4"
                />
                <span className="box-border caret-transparent block outline-[oklab(0.708_0_0_/_0.5)]">
                  New Chat
                </span>
              </button>
              <button
                aria-label="Close sidebar"
                className="bg-transparent caret-transparent block min-h-[auto] min-w-[auto] outline-[oklab(0.708_0_0_/_0.5)] ml-2 p-2 rounded-[14px] md:hidden md:min-h-0 md:min-w-0"
              >
                <img
                  src="https://c.animaapp.com/mhf1kdmbCmGjqZ/assets/icon-5.svg"
                  alt="Icon"
                  className="text-[oklch(0.446_0.03_256.802)] box-border caret-transparent h-5 outline-[oklab(0.708_0_0_/_0.5)] w-5"
                />
              </button>
            </div>
            <div className="box-border caret-transparent basis-[0%] grow outline-[oklab(0.708_0_0_/_0.5)] overflow-auto py-2">
              <div className="box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] text-center px-4 py-8">
                <img
                  src="https://c.animaapp.com/mhf1kdmbCmGjqZ/assets/icon-6.svg"
                  alt="Icon"
                  className="text-[oklch(0.872_0.01_258.338)] box-border caret-transparent h-8 outline-[oklab(0.708_0_0_/_0.5)] w-8 mb-3 mx-auto"
                />
                <p className="text-[oklch(0.707_0.022_261.325)] text-sm box-border caret-transparent leading-5 outline-[oklab(0.708_0_0_/_0.5)]">
                  No chat history yet
                </p>
              </div>
            </div>
            <div className="box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] border-[oklab(0.928_-0.000571842_-0.00597269_/_0.8)] p-4 border-t border-solid">
              <div className="text-[oklch(0.707_0.022_261.325)] text-xs box-border caret-transparent leading-4 outline-[oklab(0.708_0_0_/_0.5)] text-center">
                explainify
              </div>
            </div>
          </div>
        </aside>
        <header className="sticky backdrop-blur-xl bg-[oklab(0.999994_0.0000455677_0.0000200868_/_0.8)] box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] w-full z-10 border-[oklab(0.928_-0.000571842_-0.00597269_/_0.5)] border-b border-solid top-0">
          <div className="items-center box-border caret-transparent gap-x-4 flex h-16 max-w-screen-xl outline-[oklab(0.708_0_0_/_0.5)] gap-y-4 mx-auto px-6">
            <button
              aria-label="Toggle sidebar"
              className="bg-transparent caret-transparent block outline-[oklab(0.708_0_0_/_0.5)] p-2 rounded-[14px]"
            >
              <img
                src="https://c.animaapp.com/mhf1kdmbCmGjqZ/assets/icon-7.svg"
                alt="Icon"
                className="text-[oklch(0.373_0.034_259.733)] box-border caret-transparent h-5 outline-[oklab(0.708_0_0_/_0.5)] w-5"
              />
            </button>
            <div className="text-[oklch(0.21_0.034_264.665)] box-border caret-transparent tracking-[-0.4px] outline-[oklab(0.708_0_0_/_0.5)]">
              explainify
            </div>
            <div className="box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] ml-auto">
              <button
                aria-label="Customize AI"
                type="button"
                className="bg-transparent caret-transparent outline-[oklab(0.708_0_0_/_0.5)] p-2 rounded-[14px]"
              >
                <img
                  src="https://c.animaapp.com/mhf1kdmbCmGjqZ/assets/icon-8.svg"
                  alt="Icon"
                  className="text-[oklch(0.373_0.034_259.733)] box-border caret-transparent h-5 outline-[oklab(0.708_0_0_/_0.5)] w-5"
                />
              </button>
            </div>
          </div>
        </header>
        <div className="box-border caret-transparent basis-[0%] grow outline-[oklab(0.708_0_0_/_0.5)] overflow-auto">
          <div className="items-center box-border caret-transparent flex basis-[0%] grow justify-center outline-[oklab(0.708_0_0_/_0.5)] px-6 py-12">
            <div className="box-border caret-transparent max-w-2xl outline-[oklab(0.708_0_0_/_0.5)] w-full">
              <div className="box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] text-center mb-12">
                <div className="items-center bg-[linear-gradient(to_right_bottom,oklch(0.746_0.16_232.661)_0%,oklch(0.685_0.169_237.323)_100%)] shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,oklab(0.901_-0.0365776_-0.045012)_0px_10px_15px_-3px,oklab(0.901_-0.0365776_-0.045012)_0px_4px_6px_-4px] box-border caret-transparent inline-flex h-16 justify-center outline-[oklab(0.708_0_0_/_0.5)] w-16 mb-6 rounded-3xl">
                  <img
                    src="https://c.animaapp.com/mhf1kdmbCmGjqZ/assets/icon-9.svg"
                    alt="Icon"
                    className="text-white box-border caret-transparent h-8 outline-[oklab(0.708_0_0_/_0.5)] w-8"
                  />
                </div>
                <h1 className="text-[oklch(0.21_0.034_264.665)] box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] mb-3">
                  Welcome to Explainify
                </h1>
                <p className="text-[oklch(0.551_0.027_264.364)] box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)]">
                  Ask anything and get explanations tailored to your learning
                  style
                </p>
              </div>
              <div className="box-border caret-transparent gap-x-3 grid grid-cols-[repeat(1,minmax(0px,1fr))] outline-[oklab(0.708_0_0_/_0.5)] gap-y-3 md:grid-cols-[repeat(2,minmax(0px,1fr))]">
                <button className="bg-white caret-transparent block outline-[oklab(0.708_0_0_/_0.5)] border border-[oklab(0.928_-0.000571842_-0.00597269_/_0.8)] p-4 rounded-2xl border-solid">
                  <div className="items-start box-border caret-transparent gap-x-3 flex outline-[oklab(0.708_0_0_/_0.5)] gap-y-3">
                    <div className="items-center bg-[oklch(0.985_0.002_247.839)] box-border caret-transparent flex shrink-0 h-10 justify-center outline-[oklab(0.708_0_0_/_0.5)] w-10 rounded-[14px]">
                      <img
                        src="https://c.animaapp.com/mhf1kdmbCmGjqZ/assets/icon-10.svg"
                        alt="Icon"
                        className="text-[oklch(0.446_0.03_256.802)] box-border caret-transparent h-5 outline-[oklab(0.708_0_0_/_0.5)] w-5"
                      />
                    </div>
                    <p className="text-[oklch(0.373_0.034_259.733)] box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] pt-2">
                      Explain quantum physics like I&#39;m 5
                    </p>
                  </div>
                </button>
                <button className="bg-white caret-transparent block outline-[oklab(0.708_0_0_/_0.5)] border border-[oklab(0.928_-0.000571842_-0.00597269_/_0.8)] p-4 rounded-2xl border-solid">
                  <div className="items-start box-border caret-transparent gap-x-3 flex outline-[oklab(0.708_0_0_/_0.5)] gap-y-3">
                    <div className="items-center bg-[oklch(0.985_0.002_247.839)] box-border caret-transparent flex shrink-0 h-10 justify-center outline-[oklab(0.708_0_0_/_0.5)] w-10 rounded-[14px]">
                      <img
                        src="https://c.animaapp.com/mhf1kdmbCmGjqZ/assets/icon-11.svg"
                        alt="Icon"
                        className="text-[oklch(0.446_0.03_256.802)] box-border caret-transparent h-5 outline-[oklab(0.708_0_0_/_0.5)] w-5"
                      />
                    </div>
                    <p className="text-[oklch(0.373_0.034_259.733)] box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] pt-2">
                      Summarize a research paper
                    </p>
                  </div>
                </button>
                <button className="bg-white caret-transparent block outline-[oklab(0.708_0_0_/_0.5)] border border-[oklab(0.928_-0.000571842_-0.00597269_/_0.8)] p-4 rounded-2xl border-solid">
                  <div className="items-start box-border caret-transparent gap-x-3 flex outline-[oklab(0.708_0_0_/_0.5)] gap-y-3">
                    <div className="items-center bg-[oklch(0.985_0.002_247.839)] box-border caret-transparent flex shrink-0 h-10 justify-center outline-[oklab(0.708_0_0_/_0.5)] w-10 rounded-[14px]">
                      <img
                        src="https://c.animaapp.com/mhf1kdmbCmGjqZ/assets/icon-12.svg"
                        alt="Icon"
                        className="text-[oklch(0.446_0.03_256.802)] box-border caret-transparent h-5 outline-[oklab(0.708_0_0_/_0.5)] w-5"
                      />
                    </div>
                    <p className="text-[oklch(0.373_0.034_259.733)] box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] pt-2">
                      Teach me about ancient civilizations
                    </p>
                  </div>
                </button>
                <button
                  type="button"
                  className="bg-white caret-transparent block outline-[oklab(0.708_0_0_/_0.5)] border border-[oklab(0.928_-0.000571842_-0.00597269_/_0.8)] p-4 rounded-2xl border-solid"
                >
                  <div className="items-start box-border caret-transparent gap-x-3 flex outline-[oklab(0.708_0_0_/_0.5)] gap-y-3">
                    <div className="items-center bg-[oklch(0.985_0.002_247.839)] box-border caret-transparent flex shrink-0 h-10 justify-center outline-[oklab(0.708_0_0_/_0.5)] w-10 rounded-[14px]">
                      <img
                        src="https://c.animaapp.com/mhf1kdmbCmGjqZ/assets/icon-13.svg"
                        alt="Icon"
                        className="text-[oklch(0.446_0.03_256.802)] box-border caret-transparent h-5 outline-[oklab(0.708_0_0_/_0.5)] w-5"
                      />
                    </div>
                    <p className="text-[oklch(0.373_0.034_259.733)] box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] pt-2">
                      Add custom style
                    </p>
                  </div>
                </button>
                <button
                  type="button"
                  className="bg-white caret-transparent block outline-[oklab(0.708_0_0_/_0.5)] border border-[oklab(0.928_-0.000571842_-0.00597269_/_0.8)] p-4 rounded-2xl border-solid"
                >
                  <div className="items-start box-border caret-transparent gap-x-3 flex outline-[oklab(0.708_0_0_/_0.5)] gap-y-3">
                    <div className="items-center bg-[oklch(0.985_0.002_247.839)] box-border caret-transparent flex shrink-0 h-10 justify-center outline-[oklab(0.708_0_0_/_0.5)] w-10 rounded-[14px]">
                      <img
                        src="https://c.animaapp.com/mhf1kdmbCmGjqZ/assets/icon-14.svg"
                        alt="Icon"
                        className="text-[oklch(0.446_0.03_256.802)] box-border caret-transparent h-5 outline-[oklab(0.708_0_0_/_0.5)] w-5"
                      />
                    </div>
                    <p className="text-[oklch(0.373_0.034_259.733)] box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] pt-2">
                      Customize how AI explains
                    </p>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="sticky bg-[linear-gradient(to_top_in_oklab,rgb(255,255,255)_0%,rgb(255,255,255)_50%,rgba(0,0,0,0)_100%)] box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] w-full pt-6 pb-8 bottom-0">
          <div className="box-border caret-transparent max-w-screen-md outline-[oklab(0.708_0_0_/_0.5)] mx-auto px-6">
            <div className="relative bg-white shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,oklab(0.928_-0.000571842_-0.00597269_/_0.5)_0px_10px_15px_-3px,oklab(0.928_-0.000571842_-0.00597269_/_0.5)_0px_4px_6px_-4px] box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] border border-[oklab(0.928_-0.000571842_-0.00597269_/_0.8)] rounded-3xl border-solid">
              <div className="items-end box-border caret-transparent gap-x-3 flex outline-[oklab(0.708_0_0_/_0.5)] gap-y-3 px-5 py-3">
                <button
                  aria-label="Upload file"
                  className="bg-transparent caret-transparent block shrink-0 outline-[oklab(0.708_0_0_/_0.5)] p-2 rounded-[14px]"
                >
                  <img
                    src="https://c.animaapp.com/mhf1kdmbCmGjqZ/assets/icon-15.svg"
                    alt="Icon"
                    className="text-[oklch(0.551_0.027_264.364)] box-border caret-transparent h-5 outline-[oklab(0.708_0_0_/_0.5)] w-5"
                  />
                </button>
                <textarea
                  placeholder="Ask Explainify anything…"
                  className="text-[oklch(0.21_0.034_264.665)] bg-transparent box-border caret-transparent block basis-[0%] grow max-h-[200px] outline-[oklab(0.708_0_0_/_0.5)] text-start px-0 py-2.5"
                ></textarea>
                <button className="text-[oklch(0.707_0.022_261.325)] text-sm font-medium items-center bg-[oklch(0.967_0.003_264.542)] caret-transparent gap-x-2 flex shrink-0 h-9 justify-center leading-5 opacity-50 outline-[oklab(0.708_0_0_/_0.5)] pointer-events-none gap-y-2 text-nowrap px-3 py-2 rounded-[14px]">
                  <img
                    src="https://c.animaapp.com/mhf1kdmbCmGjqZ/assets/icon-16.svg"
                    alt="Icon"
                    className="box-border caret-transparent shrink-0 h-4 outline-[oklab(0.708_0_0_/_0.5)] text-nowrap w-4"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
