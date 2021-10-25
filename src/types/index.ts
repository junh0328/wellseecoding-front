export type homeData = {
  createdGroups: PostType[]
  registeredGroups: PostType[]
  appliedGroups: PostType[]
  likedGroups: PostType[]
}

export type TodoType = {
  completed: boolean
  id: number
  title: string
  userId: number
}

export type MemberData = {
  userId: number
  postId: number
  name: string
  authorized: boolean
}

export type PostData = {
  theme: string
  posts: PostType[]
}

/* 서버로부터 받아오는 Posts 배열의 한 객체당 타입 */
export type PostType = {
  id: number
  userId: number
  name: string | ''
  deadline: string | ''
  schedule: string | ''
  summary: string | ''
  qualification: string | ''
  size: string | ''
  tags: []
  commentCount: number
}

/* 내가 쓴 글 보낼 때 필요한 타입 */
export type WritePostType = {
  name: string
  deadline: string
  schedule: string
  summary: string
  qualification: string
  size: string
  tags: []
  id?: number
}

export type CommentType = {
  id: number
  name: string
  job: string
  text: string
  me: boolean
  date: string
}

export type FetchCommentsType = {
  userId: number
  userName: string
  commentId: number
  commentDate: number
  text: string
  deleted: boolean
  children: FetchCommentsType[]
}

export type WriteCommentType = {
  id: number
  parentId: number
  text: string
}

export type UpdateCommentType = {
  postId: number
  commentId: number
  text: string
}

//----------------------------------------
// 회원가입 단계

// 경력
export type Experience = {
  role: string | ''
}
