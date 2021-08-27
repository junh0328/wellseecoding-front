import { css } from '@emotion/react'

export const box = css`
  background: #ffffff;
  border: 1px solid #ffeee7;
  box-sizing: border-box;
  box-shadow: 0px 7px 24px rgb(0 0 0 / 10%);
  border-radius: 10px;
  margin-bottom: 18px;
  padding: 26px;

  h2 {
    font-weight: bold;
    font-size: 2rem;
    line-height: 22px;
    letter-spacing: 0.15px;
    color: rgba(0, 0, 0, 0.87);
    margin-bottom: 18px;
  }

  p {
    font-weight: 500;
    font-size: 1.8rem;
    line-height: 26px;
    display: flex;
    letter-spacing: -0.6px;
    color: #444241;
    display: flex;
    align-items: center;
    margin-bottom: 8px;
    img {
      margin-right: 6px;
    }
  }

  a {
    font-size: 1.4rem;
    line-height: 18px;
    letter-spacing: -0.4px;
    text-decoration-line: underline;
    color: #ff6e35;
  }
`