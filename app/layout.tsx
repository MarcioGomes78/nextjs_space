
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat',
})

export const dynamic = "force-dynamic"

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXTAUTH_URL || 'http://localhost:3000'),
  title: 'Vitta Fisio & Movimento - Fisioterapia Especializada',
  description: 'Volte a se mover sem dor com a fisioterapia especializada da Vitta Fisio & Movimento. Agende sua avaliação e inicie sua jornada de volta ao movimento.',
  keywords: 'fisioterapia, movimento, reabilitação, dor nas costas, recuperação, São Paulo',
  authors: [{ name: 'Vitta Fisio & Movimento' }],
  openGraph: {
    title: 'Vitta Fisio & Movimento - Fisioterapia Especializada',
    description: 'Volte a se mover sem dor com a fisioterapia especializada da Vitta Fisio & Movimento. Agende sua avaliação e inicie sua jornada de volta ao movimento.',
    images: ['/og-image.png'],
    type: 'website',
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link 
          href="https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,300;0,400;0,600;0,700;1,400&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className={`${montserrat.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
