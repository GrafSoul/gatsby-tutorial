import React from 'react';
import { css } from '@emotion/react';
import { useStaticQuery, Link, graphql } from 'gatsby';
import { rhythm } from '../utils/typography';

export default function Layout({ children }) {
    const data = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                    }
                }
            }
        `,
    );

    return (
        <div
            style={{
                margin: '0 auto',
                maxWidth: '700px',
                padding: `${rhythm(2)}`,
                paddingTop: `${rhythm(1.5)}`,
            }}
        >
            <div>
                <Link to={'/'}>
                    <h3
                        css={css`
                            margin-bottom: ${rhythm(2)};
                            display: inline-block;
                            font-style: normal;
                        `}
                    >
                        {data.site.siteMetadata.title}
                    </h3>
                </Link>
                <Link
                    to={'/'}
                    css={css`
                        float: right;
                        padding: 0 5px;
                    `}
                >
                    Home
                </Link>{' '}
                <Link
                    to={'/about/'}
                    css={css`
                        float: right;
                        padding: 0 5px;
                    `}
                >
                    About
                </Link>
            </div>
            {children}
        </div>
    );
}
