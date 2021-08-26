import { css } from '@emotion/react'
import { Common } from 'styles/common'

interface Props {
  user: string
  num: number
}
function HomeMain({ user, num }: Props) {
  return (
    <section css={homeMainWrap}>
      <img src="/images/home/dog.svg" alt="웰시코딩 캐릭터" />

      <div>
        <h1>
          안녕하세요 <strong>{user}님 👋</strong>
        </h1>
        <p>
          가입하신 스터디는
          <br />총 {num}개에요~
        </p>
      </div>
    </section>
  )
}

export default HomeMain

export const homeMainWrap = css`
  display: flex;
  justify-content: center;
  margin-top: 1em;
  div {
    margin-top: 1em;
    margin-left: 1em;
    h1 {
      font-weight: 500;
      font-size: ${Common.fontSize.fs18};
      line-height: 26px;
      color: #262626;
      letter-spacing: -0.6px;
    }
    p {
      font-weight: 500;
      font-size: ${Common.fontSize.title};
      line-height: 32px;
      letter-spacing: -1px;
      color: #262626;
    }
  }
`