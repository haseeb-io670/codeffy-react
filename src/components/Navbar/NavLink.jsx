import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NavLink = ({ className, children, href, NavLinkContent }) => {
    const [open, setOpen] = useState(false);

    const showFlyout = NavLinkContent && open;

    return (
        <div
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
            className="relative w-fit h-fit"
        >
            <a href={href} className={`${className} relative text-white`}>
                {children}
            </a>
            <AnimatePresence>
                {showFlyout && (
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 15 }}
                        style={{ translateX: "-50%" }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="absolute left-1/2 top-12 text-color"
                    >
                        <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
                        <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-black/60 backdrop-blur-md shadow-lg z-50 transition-all" />
                        <NavLinkContent />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default NavLink;