import { motion } from 'motion/react';
import type { JSX, ReactNode } from 'react';

type AppearOnScrollProps = {
    className?: string;
    children?: ReactNode;
    initial?: any;
    whileInView?: any;
    viewport?: any;
    transition?: any;
} & Record<string, any>;

export default function AppearOnScroll({
    className,
    children,
    initial = { opacity: 0, y: 16 },
    whileInView = { opacity: 1, y: 0 },
    viewport = { once: false, amount: 0.2 },
    transition = { duration: 0.35, ease: 'easeOut' },
    ...rest
}: AppearOnScrollProps): JSX.Element {
    return (
        <motion.section
            className={className}
            initial={initial}
            whileInView={whileInView}
            viewport={viewport}
            transition={transition}
            {...rest}
        >
            {children}
        </motion.section>
    );
}
