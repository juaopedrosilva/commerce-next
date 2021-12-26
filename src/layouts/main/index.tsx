import Head from 'next/head'
import Header from '@components/header'

import { Wrapper, Container } from './styles'

interface IProps {
  title: string
  children: JSX.Element | JSX.Element[]
}

export default function Layout(props: IProps) {
  return (
    <>
      <Head>
        <title>{props.title}</title>
      </Head>
      <Header />
      <Container>{props.children}</Container>
    </>
  )
}
