import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';

export const PostCode = ({ language, children }) => (
    <SyntaxHighlighter
        style={prism}
        customStyle={{
            fontSize: "1.2rem",
            borderRadius: "8px",
        }}
        language={language}
    >
        {children}
    </SyntaxHighlighter>
)