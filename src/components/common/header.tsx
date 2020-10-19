import React from 'react'
import { useStyletron } from 'baseui'

export const Header = () => {
  const [css, theme] = useStyletron()

  return (
    <header
      className={css({
        backgroundColor: 'white',
        borderBottom: `1px solid ${theme.colors.mono400}`,
      })}
    >
      <div
        className={css({
          maxWidth: '999px',
          margin: '0px auto',
          height: '64px',
          display: 'flex',
          alignItems: 'center',
        })}
      >
        <div className={css({ display: 'flex', alignItems: 'center' })}>
          <img width="32" src="/logo.png" alt="anaijs logo" />
          <h1
            className={css({
              ...theme.typography.font850,
              margin: 0,
              paddingLeft: theme.sizing.scale300,
            })}
          >
            anai.js
          </h1>
        </div>
        <nav className={css({ marginLeft: theme.sizing.scale1000 })}>
          <a
            href="/"
            className={css({
              ...theme.typography.font300,
              textDecoration: 'none',
              color: theme.colors.black,
              borderBottom: `3px solid ${theme.colors.white}`,
              paddingTop: theme.sizing.scale900,
              paddingBottom: theme.sizing.scale700,
              marginRight: theme.sizing.scale800,
              ':hover': {
                borderBottom: `3px solid ${theme.colors.black}`,
              },
            })}
          >
            experiments
          </a>
          <a
            href="/"
            className={css({
              ...theme.typography.font300,
              textDecoration: 'none',
              color: theme.colors.black,
              borderBottom: `3px solid ${theme.colors.white}`,
              paddingTop: theme.sizing.scale900,
              paddingBottom: theme.sizing.scale700,
              marginRight: theme.sizing.scale800,
              ':hover': {
                borderBottom: `3px solid ${theme.colors.black}`,
              },
            })}
          >
            giới thiệu
          </a>
        </nav>
      </div>
    </header>
  )
}
