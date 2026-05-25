import type { Metadata } from 'next'
import { Inter, Fira_Code } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
})

const firaCode = Fira_Code({ 
  subsets: ["latin"],
  variable: '--font-fira-code'
})

export const metadata: Metadata = {
  title: 'Portfolio | Full Stack Developer',
  description: 'MERN Stack Developer & Computer Science student building real-world full-stack applications with React, Node.js, and AI integration.',
  keywords: ['Full Stack Developer', 'MERN Stack', 'React', 'Node.js', 'Portfolio', 'Web Developer'],
  authors: [{ name: 'Developer' }],
  openGraph: {
    title: 'Portfolio | Full Stack Developer',
    description: 'MERN Stack Developer building real-world full-stack applications',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${firaCode.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
