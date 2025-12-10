import React, { useState } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { green } from '@mui/material/colors'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Link from '@mui/material/Link'
import Paper from '@mui/material/Paper'
import Chip from '@mui/material/Chip'
import Divider from '@mui/material/Divider'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import CodeIcon from '@mui/icons-material/Code'
import DownloadIcon from '@mui/icons-material/Download'
import PublicIcon from '@mui/icons-material/Public'
import BoltIcon from '@mui/icons-material/Bolt'
import DemoTester from './components/DemoTester';

function CodeBlock({ children }) {
  const [copied, setCopied] = useState(false)
  return (
    <Paper variant="outlined" sx={{ position: 'relative', p: 2, bgcolor: '#0b1220', color: '#e6edf3', fontSize: 12, overflowX: 'auto' }}>
      <pre style={{ margin: 0 }}><code>{children}</code></pre>
      <Button
        size="small"
        variant="contained"
        color="primary"
        onClick={() => { navigator.clipboard.writeText(children); setCopied(true); setTimeout(() => setCopied(false), 1200) }}
        sx={{ position: 'absolute', top: 8, right: 8, textTransform: 'none' }}
      >
        {copied ? 'Copied' : 'Copy'}
      </Button>
    </Paper>
  )
}

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: green[700] },
    secondary: { main: green[900] },
    success: { main: green[600] },
  },
  shape: { borderRadius: 10 },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
        <Box component="header" sx={{ borderBottom: 1, borderColor: 'divider', bgcolor: 'background.paper' }}>
          <Container maxWidth="lg" sx={{ py: 1.5, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Stack direction="row" spacing={1} alignItems="center">
              <Chip label="NG" color="success" sx={{ fontWeight: 700 }} />
              <Typography variant="h6" sx={{ fontWeight: 700 }}>Nigeria State Data</Typography>
            </Stack>
            <Stack direction="row" spacing={2}>
              <Link href="https://www.npmjs.com/package/nigeria-state-lga-data" target="_blank" underline="hover" color="primary">NPM</Link>
              <Link href="https://github.com/CodeLeom/nigeria-state-city-lga" target="_blank" underline="hover" color="primary">GitHub</Link>
            </Stack>
          </Container>
        </Box>

        <Container maxWidth="lg" sx={{ py: 6 }}>
          <Paper variant="outlined" sx={{
            p: { xs: 3, md: 5 },
            textAlign: 'center',
            background: `linear-gradient(180deg, ${green[50]}, #fff)`
          }}>
            <Stack spacing={1} alignItems="center">
              <Stack direction="row" spacing={1}>
                <Chip label="Stable API" size="small" color="success" variant="outlined" />
                <Chip label="Zero dependencies" size="small" color="success" variant="outlined" />
              </Stack>
              <Typography variant="h3" sx={{ fontWeight: 800, letterSpacing: -0.5 }}>Nigerian States, LGAs, and Towns</Typography>
              <Typography color="text.secondary">Lightweight Node package with clean helpers for states, LGAs, capitals, and towns.</Typography>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} justifyContent="center" sx={{ mt: 1 }}>
                <Button color="primary" variant="contained" startIcon={<DownloadIcon />} href="https://www.npmjs.com/package/nigeria-state-lga-data" target="_blank">Install</Button>
                <Button color="primary" variant="outlined" startIcon={<PublicIcon />} href="https://github.com/CodeLeom/nigeria-state-city-lga" target="_blank">Repository</Button>
              </Stack>
            </Stack>
            <Box sx={{ mt: 3 }}>
              <CodeBlock>{`npm i nigeria-state-lga-data`}</CodeBlock>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 1, textAlign: 'center' }}>or</Typography>
              <CodeBlock>{`yarn add nigeria-state-lga-data`}</CodeBlock>
            </Box>
          </Paper>

          <Stack spacing={3} sx={{ mt: 5 }}>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3}>
              <Paper variant="outlined" sx={{ p: 3, flex: 1 }}>
                <Stack direction="row" spacing={1} alignItems="center">
                  <CodeIcon fontSize="small" />
                  <Typography variant="subtitle2">Usage (Node.js)</Typography>
                </Stack>
                <Box sx={{ mt: 1.5 }}>
                  <CodeBlock>{`const {
  getStates,
  getStatesAndCapitals,
  getLgas,
  getTowns,
  getCapital,
  getState,
  getStatesData
} = require('nigeria-state-lga-data');

console.log(getStates());                 // ['Abia', 'Adamawa', ...]
console.log(getLgas('Lagos'));            // ['Agege', 'Alimosho', ...]
console.log(getTowns('Kano'));            // ['Ajingi', 'Albasu', ...]
console.log(getCapital('Rivers'));        // 'Port Harcourt'
console.log(getState('Oyo'));             // { name, capital, lgas, towns }
console.log(getStatesData().length);      // 36
`}</CodeBlock>
                </Box>
              </Paper>

              <Paper variant="outlined" sx={{ p: 3, flex: 1 }}>
                <Stack direction="row" spacing={1} alignItems="center">
                  <BoltIcon fontSize="small" />
                  <Typography variant="subtitle2">API Surface</Typography>
                </Stack>
                <List dense sx={{ mt: 1 }}>
                  <ListItem><ListItemIcon><CodeIcon fontSize="small" /></ListItemIcon><ListItemText primary="getStates() → string[]" /></ListItem>
                  <ListItem><ListItemIcon><CodeIcon fontSize="small" /></ListItemIcon><ListItemText primary="getStatesAndCapitals() → { state, capital }[]" /></ListItem>
                  <ListItem><ListItemIcon><CodeIcon fontSize="small" /></ListItemIcon><ListItemText primary="getLgas(state) → string[]" /></ListItem>
                  <ListItem><ListItemIcon><CodeIcon fontSize="small" /></ListItemIcon><ListItemText primary="getTowns(state) → string[]" /></ListItem>
                  <ListItem><ListItemIcon><CodeIcon fontSize="small" /></ListItemIcon><ListItemText primary="getCapital(state) → string" /></ListItem>
                  <ListItem><ListItemIcon><CodeIcon fontSize="small" /></ListItemIcon><ListItemText primary="getState(state) → State" /></ListItem>
                  <ListItem><ListItemIcon><CodeIcon fontSize="small" /></ListItemIcon><ListItemText primary="getStatesData() → State[]" /></ListItem>
                </List>
              </Paper>
            </Stack>

            <Paper variant="outlined" sx={{ p: 3 }}>
              <Typography variant="subtitle2">Note</Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                Towns are listed at the state level. Towns-per-LGA lookups may be added by contributors later.
              </Typography>
            </Paper>
          </Stack>

          <Divider sx={{ my: 5 }} />

          <Stack direction="row" spacing={1.5} justifyContent="center">
            <Button color="primary" variant="contained" href="https://www.npmjs.com/package/nigeria-state-lga-data" target="_blank">View on NPM</Button>
            <Button color="primary" variant="outlined" href="https://github.com/CodeLeom/nigeria-state-city-lga" target="_blank">GitHub Repo</Button>
          </Stack>
        </Container>

        <DemoTester />


        <Box component="footer" sx={{ borderTop: 1, borderColor: 'divider', bgcolor: 'background.paper', mt: 6 }}>
          <Container maxWidth="lg" sx={{ py: 3 }}>
            <Typography variant="caption" color="text.secondary">MIT Licensed. Built with Vite & Material UI.</Typography>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  )
}


