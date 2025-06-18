'use client';

import { useState } from 'react';
import Link from 'next/link';
import { InViewAnimation } from '../../components/InViewAnimation';
import { PortfolioItem } from './PortfolioSection';

const projects = [
	{
		image: '/images/c1.png',
		title: 'Corporate & Tech',
		category: 'Corporate & Tech',
		link: 'https://aizflex.webflow.io/',
		description:
			'A modern fintech platform with real-time data visualization and interactive dashboards.',
	},
	{
		image: '/images/c2.png',
		title: 'Corporate & Tech',
		category: 'Corporate & Tech',
		link: 'https://pulse-saas.webflow.io/',
		description:
			'Interactive 3D art gallery experience with WebGL and custom animations.',
	},
	{
		image: '/images/c3.png',
		title: 'Corporate & Tech',
		category: 'Corporate & Tech',
		link: 'https://tech-tribe.webflow.io/',
		description:
			'UX/UI design for an environmental sustainability platform with intuitive data reporting.',
	},
	{
		image: '/images/c4.png',
		title: 'Corporate & Tech',
		category: 'Corporate & Tech',
		link: 'https://corporata-template.webflow.io/',
		description:
			'E-commerce platform optimization reducing load time by 70% and increasing conversions.',
	},
	{
		image: '/images/e1.png',
		title: 'Eco Marketplace',
		category: 'E-commerce',
		link: 'https://zinzira.webflow.io/',
		description:
			'Streaming service with custom audio visualization and seamless playback.',
	},
	{
		image: '/images/e2.png',
		title: 'Eco Marketplace',
		category: 'E-commerce',
		link: 'https://flash-flow.webflow.io/',
		description:
			'Interactive space exploration experience with 3D planetary systems and educational content.',
	},
	{
		image: '/images/e4.png',
		title: 'Eco Marketplace',
		category: 'E-commerce',
		link: 'https://kidcube.webflow.io/',
		description:
			'Interactive space exploration experience with 3D planetary systems and educational content.',
	},
	{
		image: '/images/e3.png',
		title: 'Eco Marketplace',
		category: 'E-commerce',
		link: 'https://jewellery-nx.webflow.io/',
		description:
			'Interactive space exploration experience with 3D planetary systems and educational content.',
	},
	{
		image: '/images/t1.png',
		title: 'Travel & Real Estate',
		category: 'Travel & Real estate',
		link: 'https://real-estatoe.webflow.io/',
		description:
			'Interactive space exploration experience with 3D planetary systems and educational content.',
	},
	{
		image: '/images/t2.png',
		title: 'Travel & Real Estate',
		category: 'Travel & Real estate',
		link: 'https://urban-estate-template.webflow.io/',
		description:
			'Interactive space exploration experience with 3D planetary systems and educational content.',
	},
	{
		image: '/images/t3.png',
		title: 'Travel & Real Estate',
		category: 'Travel & Real estate',
		link: 'https://estyva.webflow.io/',
		description:
			'Interactive space exploration experience with 3D planetary systems and educational content.',
	},
	{
		image: '/images/t.png',
		title: 'Travel & Real Estate',
		category: 'Travel & Real estate',
		link: 'https://ruma-property-site.webflow.io/',
		description:
			'Interactive space exploration experience with 3D planetary systems and educational content.',
	},
	{
		image: '/images/h1.png',
		title: 'Healthcare Platform',
		category: 'Healthcare Platform',
		link: 'https://medpro-medical-template.webflow.io/',
		description:
			'Interactive space exploration experience with 3D planetary systems and educational content.',
	},
	{
		image: '/images/h2.png',
		title: 'Healthcare Platform',
		category: 'Healthcare Platform',
		link: 'https://doctorate-template.webflow.io/',
		description:
			'Interactive space exploration experience with 3D planetary systems and educational content.',
	},
];

const categories = [
	'All',
	'Corporate & Tech',
	'E-commerce',
	'Travel & Real estate',
	'Healthcare Platform',
];

export default function Projects() {
	const [activeCategory, setActiveCategory] = useState('All');
	const filteredProjects =
		activeCategory === 'All'
			? projects
			: projects.filter((p) => p.category === activeCategory);

	return (
		<section className="py-20 bg-background">
			<div className="container mx-auto px-4 md:px-6">
				<InViewAnimation>
					<div className="text-center mb-12">
						<h2 className="text-3xl md:text-4xl font-bold mb-4">
							Portfolio & Templates
						</h2>
						<p className="text-muted-foreground max-w-2xl mx-auto">
							Explore our portfolio of successful projects & Templates that
							showcase our expertise and commitment to excellence.
						</p>
					</div>
				</InViewAnimation>
				<InViewAnimation>
					<div className="flex flex-wrap justify-center mb-10">
						<div className="flex flex-wrap justify-center gap-2 mb-10 max-w-4xl mx-auto">
							{categories.map((category) => (
								<button
									key={category}
									onClick={() => setActiveCategory(category)}
									className={`px-4 py-2 rounded-full text-sm transition-colors ${
										activeCategory === category
											? 'bg-primary text-primary-foreground'
											: 'bg-muted text-muted-foreground hover:bg-muted/80'
									}`}
								>
									{category}
								</button>
							))}
						</div>
					</div>
				</InViewAnimation>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
					{filteredProjects.map((project, index) => (
						<InViewAnimation key={index} delay={index * 100}>
							<PortfolioItem {...project} />
						</InViewAnimation>
					))}
				</div>
				<InViewAnimation>
					<div className="text-center mt-12">
						<Link
							href="/contact"
							className="inline-flex items-center bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-3 px-6 rounded-md transition-colors"
						>
							Start Your Project
						</Link>
					</div>
				</InViewAnimation>
			</div>
		</section>
	);
}
