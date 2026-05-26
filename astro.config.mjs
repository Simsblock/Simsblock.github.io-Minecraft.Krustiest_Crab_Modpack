// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({

    site: 'https://Simsblock.github.io', 
    base: '/Simsblock.github.io-Minecraft.Krustiest_Crab_Modpack',

    integrations: [starlight({
        title: 'Krustiest Crab',
        social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
        sidebar: [
            {
                label: 'Progression',
                items: [{ autogenerate: { directory: 'reference' } }],
            },
            {
                label: 'Create',
                items: [{ autogenerate: { directory: 'reference' } }],
            },
            {
                label: 'Enchanting',
                items: [{ autogenerate: { directory: 'reference' } }],  
            },
            {
                label: 'Advice',
                items: [{ autogenerate: { directory: 'reference' } }],
            },
                        {
                label: 'Miscellaneous',
                items: [
                    // Each item here is one entry in the navigation menu.
                    { label: 'Color Text', slug: 'miscellaneous/qol/color-text' },
                    { label: 'Custom Armor Stands', slug: 'miscellaneous/features/armor-stands' },
                    { label: 'Horse Stats', slug: 'miscellaneous/qol/horse-stats' },
                    { label: 'Ping Wheel', slug: 'miscellaneous/qol/ping' },
                    { label: 'Leashing Players', slug: 'miscellaneous/social/leash' },
                    { label: 'Kissing Players', slug: 'miscellaneous/social/kiss' },
                    { label: 'Feeding Players', slug: 'miscellaneous/social/feed' },
                    { label: 'Voice Chat', slug: 'miscellaneous/social/voice-chat' },
                ],
            }
        ],
		}), mdx()],
});