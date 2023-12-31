import { Box, Link } from '@mui/joy';

export default function NavBar() {
    return (
        <Box
            component="header"
            className="Header"
            sx={[
                {
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    borderBottom: '1px solid',
                    borderColor: 'divider'
                }
            ]}>

            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 1.5, paddingLeft: '3vmin' }}>
                <Link color='white' fontWeight='bold' href="/" style={{ textDecoration: 'none', fontSize: '2vw' }}>Heba Arafat</Link>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 1.5, paddingRight: '3vmin' }}>
                <Link color='white' href="/about" style={{ textDecoration: 'none' }}>About</Link>
                <Link color='white' href="/skills" style={{ textDecoration: 'none' }}>Skills</Link>
                <Link color='white' href="/projects" style={{ textDecoration: 'none' }}>Projects</Link>
            </Box>
        </Box>
    );
}