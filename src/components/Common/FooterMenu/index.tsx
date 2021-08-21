import Link from 'next/link'
import { footerNav, footerNavWrap } from './style'
import { useRouter } from 'next/router'

const FooterMenu = () => {
  const router = useRouter()

  return (
    <nav css={footerNav}>
      <ul css={footerNavWrap}>
        <li className={router.asPath === '/home' ? 'active' : ''}>
          <Link href="/home">
            <a>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16.6333 4.51843L17.6464 3.28009L27.2797 11.1618C28.1154 11.8456 28.6 12.8683 28.6 13.9481V25.0003C28.6 26.4363 27.436 27.6003 26 27.6003H21C19.5641 27.6003 18.4 26.4363 18.4 25.0003V21.0003C18.4 19.6748 17.3255 18.6003 16 18.6003C14.6745 18.6003 13.6 19.6748 13.6 21.0003V25.0003C13.6 26.4363 12.436 27.6003 11 27.6003H6.00002C4.56408 27.6003 3.40002 26.4363 3.40002 25.0003V13.9481C3.40002 12.8683 3.88468 11.8456 4.72037 11.1618L14.3536 3.28009L15.3668 4.51843L5.73355 12.4002C5.26928 12.78 5.00002 13.3482 5.00002 13.9481V25.0003C5.00002 25.5526 5.44774 26.0003 6.00002 26.0003H11C11.5523 26.0003 12 25.5526 12 25.0003V21.0003C12 18.7912 13.7909 17.0003 16 17.0003C18.2092 17.0003 20 18.7912 20 21.0003V25.0003C20 25.5526 20.4477 26.0003 21 26.0003H26C26.5523 26.0003 27 25.5526 27 25.0003V13.9481C27 13.3482 26.7308 12.78 26.2665 12.4002L16.6333 4.51843ZM16.6333 4.51843C16.2649 4.21704 15.7352 4.21704 15.3668 4.51843L14.3536 3.28009C15.3114 2.49648 16.6887 2.49648 17.6464 3.28009L16.6333 4.51843Z"
                  fill="#B6B2B0"
                />
              </svg>

              <p>홈</p>
            </a>
          </Link>
        </li>

        <li className={router.asPath === '/together' ? 'active' : ''}>
          <Link href="/together">
            <a>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M21.5 30C26.1944 30 30 26.1944 30 21.5C30 16.8056 26.1944 13 21.5 13C16.8056 13 13 16.8056 13 21.5C13 26.1944 16.8056 30 21.5 30Z"
                  fill="white"
                />
                <circle cx="21.5" cy="21.5" r="7.5" fill="white" />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M21.5 28.4C25.3108 28.4 28.4 25.3108 28.4 21.5C28.4 17.6892 25.3108 14.6 21.5 14.6C17.6892 14.6 14.6 17.6892 14.6 21.5C14.6 25.3108 17.6892 28.4 21.5 28.4ZM21.5 30C26.1944 30 30 26.1944 30 21.5C30 16.8056 26.1944 13 21.5 13C16.8056 13 13 16.8056 13 21.5C13 26.1944 16.8056 30 21.5 30Z"
                  fill="#B6B2B0"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M22.7612 23.096C23.0249 23.2551 23.0784 23.5559 22.8806 23.768L20.9776 25.808C20.8649 25.9289 20.6879 26 20.5 26C20.3121 26 20.1351 25.9289 20.0224 25.808L18.1194 23.768C17.9216 23.5559 17.9751 23.2551 18.2388 23.096C18.5026 22.937 18.8768 22.98 19.0746 23.192L20.5 24.72L21.9254 23.192C22.1232 22.98 22.4974 22.937 22.7612 23.096Z"
                  fill="#B6B2B0"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.3125 19.9375C18.5886 19.9375 18.8125 20.1614 18.8125 20.4375L18.8125 21.5C18.8125 21.7761 18.5886 22 18.3125 22C18.0364 22 17.8125 21.7761 17.8125 21.5L17.8125 20.4375C17.8125 20.1614 18.0364 19.9375 18.3125 19.9375Z"
                  fill="#B6B2B0"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M22.5 19.9375C22.7761 19.9375 23 20.1614 23 20.4375L23 21.5C23 21.7761 22.7761 22 22.5 22C22.2239 22 22 21.7761 22 21.5L22 20.4375C22 20.1614 22.2239 19.9375 22.5 19.9375Z"
                  fill="#B6B2B0"
                />
                <path
                  d="M19 10.5C19 15.1944 15.1944 19 10.5 19C5.80558 19 2 15.1944 2 10.5C2 5.80558 5.80558 2 10.5 2C15.1944 2 19 5.80558 19 10.5Z"
                  fill="white"
                />
                <circle cx="10.5" cy="10.5" r="7.5" fill="white" />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.5 17.4C14.3108 17.4 17.4 14.3108 17.4 10.5C17.4 6.68924 14.3108 3.6 10.5 3.6C6.68924 3.6 3.6 6.68924 3.6 10.5C3.6 14.3108 6.68924 17.4 10.5 17.4ZM10.5 19C15.1944 19 19 15.1944 19 10.5C19 5.80558 15.1944 2 10.5 2C5.80558 2 2 5.80558 2 10.5C2 15.1944 5.80558 19 10.5 19Z"
                  fill="#B6B2B0"
                />
                <path
                  d="M13.7982 13.2308L13.7134 13.3278C12.4979 14.7179 10.3193 14.6652 9.17251 13.2177C9.10275 13.1297 9.16546 13 9.2778 13H13.6934C13.813 13 13.8769 13.1408 13.7982 13.2308Z"
                  fill="#B6B2B0"
                  stroke="#B6B2B0"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.5 9C9.77614 9 10 9.21707 10 9.48485L10 10.5152C10 10.7829 9.77614 11 9.5 11C9.22386 11 9 10.7829 9 10.5152L9 9.48485C9 9.21707 9.22386 9 9.5 9Z"
                  fill="#B6B2B0"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M13.6875 9C13.9636 9 14.1875 9.22386 14.1875 9.5L14.1875 10.5625C14.1875 10.8386 13.9636 11.0625 13.6875 11.0625C13.4114 11.0625 13.1875 10.8386 13.1875 10.5625L13.1875 9.5C13.1875 9.22386 13.4114 9 13.6875 9Z"
                  fill="#B6B2B0"
                />
                <path
                  d="M23.8679 9.36794C23.8679 9.71702 24.1509 10 24.5 10C24.8491 10 25.1321 9.71702 25.1321 9.36794V8.13206H26.3679C26.717 8.13206 27 7.84908 27 7.5C27 7.15092 26.717 6.86794 26.3679 6.86794H25.1321V5.63206C25.1321 5.28298 24.8491 5 24.5 5C24.1509 5 23.8679 5.28298 23.8679 5.63206V6.86794H22.6321C22.283 6.86794 22 7.15092 22 7.5C22 7.84908 22.283 8.13206 22.6321 8.13206H23.8679V9.36794Z"
                  fill="#B6B2B0"
                />
                <path
                  d="M5 25.0467C5 25.4016 5.28772 25.6894 5.64265 25.6894H9.35735C9.71228 25.6894 10 25.4016 10 25.0467C10 24.6918 9.71228 24.4041 9.35735 24.4041H5.64265C5.28772 24.4041 5 24.6918 5 25.0467ZM5 22.6427C5 22.9976 5.28772 23.2853 5.64265 23.2853H9.35735C9.71228 23.2853 10 22.9976 10 22.6427C10 22.2877 9.71228 22 9.35735 22H5.64265C5.28772 22 5 22.2877 5 22.6427Z"
                  fill="#B6B2B0"
                />
              </svg>

              <p>함께해요</p>
            </a>
          </Link>
        </li>

        <li className={router.asPath === '/mypage' ? 'active' : ''}>
          <Link href="/mypage">
            <a>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M29 16C29 23.1797 23.1797 29 16 29C8.8203 29 3 23.1797 3 16C3 8.8203 8.8203 3 16 3C23.1797 3 29 8.8203 29 16Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3.80001 16.0002C3.80001 9.26232 9.26214 3.8002 16 3.8002C22.7379 3.8002 28.2 9.26232 28.2 16.0002C28.2 22.7381 22.7379 28.2002 16 28.2002C9.26214 28.2002 3.80001 22.7381 3.80001 16.0002ZM16 2.2002C8.37848 2.2002 2.20001 8.37867 2.20001 16.0002C2.20001 23.6217 8.37848 29.8002 16 29.8002C23.6215 29.8002 29.8 23.6217 29.8 16.0002C29.8 8.37867 23.6215 2.2002 16 2.2002ZM19.4 12.0002C19.4 13.878 17.8778 15.4002 16 15.4002C14.1222 15.4002 12.6 13.878 12.6 12.0002C12.6 10.1225 14.1222 8.60024 16 8.60024C17.8778 8.60024 19.4 10.1225 19.4 12.0002ZM21 12.0002C21 14.7617 18.7614 17.0002 16 17.0002C13.2386 17.0002 11 14.7617 11 12.0002C11 9.23882 13.2386 7.00024 16 7.00024C18.7614 7.00024 21 9.23882 21 12.0002Z"
                  fill="#B6B2B0"
                />
                <path
                  d="M6.5 24.5C6.5 24.5 9.5 19 16 19C22.5 19 25.5 24.5 25.5 24.5"
                  stroke="#B6B2B0"
                  strokeWidth="1.6"
                />
              </svg>

              <p>마이페이지</p>
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default FooterMenu