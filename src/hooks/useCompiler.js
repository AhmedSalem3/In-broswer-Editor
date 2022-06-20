import React from "react";
import Quote from "../components/Markdown/Quote/Quote";
import Bold from "../components/Markdown/Bold/Bold";

// import InlineCode from '';

const REGEXs = {
  HEADER: /^#+ /i,
  OL: /^\d+\. /i,
  UL: /^- /i,
  QUOTE: /^> /i,
  BOLD: /\*\*[a-z]+\*\*/gi,
  INLINE_CODE: /`.+`/gi,
  BLOCK_CODE: /\\/i,
};

function useCompiler() {
  //* RETURN VALUE
  // {params}: text
  return (text = "") => {
    return compileMd(text);
  };

  function compileMd(text) {
    let cleaned = text.split("\n").filter((t) => t !== "");

    let compiled = [];
    // stash is used to store lis
    let stash = [];

    for (let i = 0; i < cleaned.length; i++) {
      let line = cleaned[i];
      //* compiling inline content ex: strong, inline-code, etc..
      line = inlineCompiler(line);

      console.log(console.log(line));
      if (REGEXs.HEADER.test(line)) {
        compiled.push(header(line));
      } else if (REGEXs.QUOTE.test(line)) {
        compiled.push(quote(line));
      } else if (REGEXs.UL.test(line)) {
        //* Merging liS logic
        stash.push(<li key={Math.random()}>{clean(line)}</li>);

        if (lastLi(cleaned[i + 1])) {
          const ul = <ul key={Math.random()}> {stash} </ul>;

          compiled.push(ul);
          // resetting lis
          stash = [];
        }
      } else if (REGEXs.OL.test(line)) {
        //* Merging liS logic
        stash.push(<li key={Math.random()}>{clean(line)}</li>);

        if (lastInOl(cleaned[i + 1])) {
          const ol = <ol key={Math.random()}> {stash} </ol>;

          compiled.push(ol);
          // resetting lis
          stash = [];
        }
      } else {
        compiled.push(<p>{line}</p>);
      }
    }
    return compiled;
  }

  // utils

  function countHashes(line) {
    return line.split("").filter((w) => w === "#").length;
  }

  function clean(line) {
    return line.split(" ").slice(1).join(" ");
  }

  function lastLi(nextLine) {
    if (!nextLine) return true;
    if (REGEXs.UL.test(nextLine)) {
      return false;
    }
    return true;
  }
  function lastInOl(nextLine) {
    if (!nextLine) return true;
    if (REGEXs.OL.test(nextLine)) {
      return false;
    }
    return true;
  }

  function inlineCompiler(line) {
    //! ISSUE: it will not compile bold text with spacing because of the splitting | Must change the logic
    let compiled = line;

    //* Bolded Text
    compiled = compileInBetween({
      line: compiled,
      searchRe: /\*\*/gi,
      replacerTag: bold,
      formateRe: REGEXs.BOLD,
    });

    //*Inline Code
    compiled = compileInBetween({
      line: compiled,
      searchRe: /`/gi,
      replacerTag: "InlineCode",
      formateRe: REGEXs.INLINE_CODE,
    });

    return compiled;

    function compileInBetween({ line, searchRe, replacerTag, formateRe }) {
      let modified = line;
      const symbolOccurence = line.match(formateRe)?.length * 2;
      let tagOpened = false;

      for (let i = 0; i < symbolOccurence || 0; i++) {
        if (!tagOpened) {
          tagOpened = true;
          modified = modified.replace(searchRe, replacerTag('BOLDED TEXT'));
        } else {
          modified = modified.replace(searchRe, ``);
          tagOpened = false;
        }
      }

      return modified;
    }
  }

  // convertions
  function header(line) {
    //TODO: add h4-h6 headers
    let hashes = countHashes(line);
    console.log(hashes);

    return hashes === 1 ? (
      <h1>{clean(line)}</h1>
    ) : hashes === 2 ? (
      <h2>{clean(line)}</h2>
    ) : hashes === 3 ? (
      <h3>{clean(line)}</h3>
    ) : (
      <p>${clean(line)}</p>
    );
  }
  function quote(line) {
    return <Quote>{clean(line)}</Quote>;
  }

function bold(text) {
  return <Bold>{text}</Bold>
}

  //   function ul(line) {
  //     return <Ul>{clean(line)}</Ul>;
  // }
  //   function ol(line) {
  //   return <Ol>{clean(line)}</Ol>;
  // }
}

export default useCompiler;
