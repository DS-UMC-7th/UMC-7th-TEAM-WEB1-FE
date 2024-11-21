function FONT({ family, weight, size }) {
  return `
              font-family: ${family}, sans-serif;
              font-size: ${size}rem;
              font-weight: ${weight};
              `;
}

const font = {
  // 10px = 1rem
  // (예시) thin(1), extralight(2), light(3), regular(4), medium(5), semibold(6), bold(7), extrabold(8), black(9)

  // Elice DX Neolli
  eli_bold_36: FONT({ family: "Elice DX Neolli", weight: 700, size: 3.6 }),

  // Pretendard
  pre_medium_18: FONT({ family: "Pretendard", weight: 500, size: 1.8 }),
};

export default font;
