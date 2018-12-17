import React from "react"

const styles = {
    footer: {
        position: 'fixed',
        bottom: 0,
        padding: '2rem 0',
        width: '100%',
        textAlign: 'center',
        fontSize: '.7rem',
        fontFamily: 'Consolas, san-serif',
        background: '#eee'
    }
}

const Footer = () => (
    <footer style={styles.footer}>
        &copy; {new Date().getFullYear()} Sandesh Poudel
    </footer>
)

export default Footer