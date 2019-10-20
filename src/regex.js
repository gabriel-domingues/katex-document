// const matchPairs = (begin, end) => string => {
//   const rx = new RegExp(`/${begin}[\\s\\S]+?${end}/g`);
//   return string.split(rx);
// };
// // Identifies Environments
// const environment = env => matchPairs(`\\begin{${env}}`, `\\end{${env}}`);
// // Finds New Commands
// const macro = /\\newcommand{[\s\S]+?}\[[\s\S]+?\]/g;

export const mathLatex = /\$\$[\s\S]+?\$\$|\$[\s\S]+?\$|\\\[[\s\S]+?\\\]|\\\([\s\S]+?\\\)/g;
export const blockLatex = /\$\$[\s\S]+?\$\$|\\\[[\s\S]+?\\\]/g;
