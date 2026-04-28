// sections\Github.tsx
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Section, SectionTitle } from '../components/Layout';
import { SiGithub } from 'react-icons/si';
import { Star, GitFork, BookOpen, GitCommit, ExternalLink } from 'lucide-react';
import { FEATURED_PROJECTS } from '@/constants';

const GITHUB_USERNAME = 'Mit16';

interface GithubUser {
    public_repos: number;
    followers: number;
    following: number;
    name: string;
    bio: string;
    avatar_url: string;
}

interface Repo {
    id: number;
    name: string;
    description: string | null;
    stargazers_count: number;
    forks_count: number;
    language: string | null;
    html_url: string;
    fork: boolean;
}

const LANG_COLORS: Record<string, string> = {
    TypeScript: '#3178c6',
    JavaScript: '#f7df1e',
    Python: '#3572A5',
    'C++': '#f34b7d',
    Kotlin: '#A97BFF',
    Java: '#b07219',
    Go: '#00ADD8',
    Rust: '#dea584',
    Shell: '#89e051',
};

const StatCard = ({ icon, value, label }: { icon: React.ReactNode; value: string | number; label: string }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col items-center justify-center p-6 border border-black/5 dark:border-white/5 bg-black/[0.02] dark:bg-white/[0.01] rounded-2xl gap-3"
    >
        <div className="text-sky-500">{icon}</div>
        <p className="text-3xl font-bold font-futuristic text-neutral-900 dark:text-white">{value}</p>
        <p className="text-xs text-neutral-500 uppercase tracking-widest">{label}</p>
    </motion.div>
);

const RepoCard = ({ repo }: { repo: Repo }) => (
    <motion.a
        href={repo.html_url}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ y: -4, borderColor: 'rgba(56,189,248,0.3)' }}
        className="group flex flex-col gap-3 p-6 border border-black/5 dark:border-white/5 bg-black/[0.02] dark:bg-white/[0.01] rounded-2xl transition-all duration-300 hover:bg-black/[0.05] dark:hover:bg-white/[0.03]"
    >
        <div className="flex justify-between items-start">
            <h4 className="font-futuristic font-semibold text-neutral-900 dark:text-white text-sm uppercase tracking-wider leading-tight pr-2">
                {repo.name}
            </h4>
            <ExternalLink size={14} className="text-neutral-600 group-hover:text-sky-400 transition-colors shrink-0 mt-0.5" />
        </div>

        <p className="text-xs text-neutral-500 leading-relaxed line-clamp-2 flex-1">
            {repo.description || 'No description provided.'}
        </p>

        <div className="flex items-center justify-between pt-2 border-t border-black/5 dark:border-white/5">
            <div className="flex items-center gap-1.5">
                {repo.language && (
                    <>
                        <span
                            className="w-2.5 h-2.5 rounded-full"
                            style={{ backgroundColor: LANG_COLORS[repo.language] ?? '#888' }}
                        />
                        <span className="text-[10px] text-neutral-400 font-futuristic uppercase tracking-widest">
                            {repo.language}
                        </span>
                    </>
                )}
            </div>
            <div className="flex items-center gap-4">
                <span className="flex items-center gap-1 text-[10px] text-neutral-500">
                    <Star size={11} /> {repo.stargazers_count}
                </span>
                <span className="flex items-center gap-1 text-[10px] text-neutral-500">
                    <GitFork size={11} /> {repo.forks_count}
                </span>
            </div>
        </div>
    </motion.a>
);

// Compute top languages from repos
const getTopLanguages = (repos: Repo[]) => {
    const counts: Record<string, number> = {};
    repos.forEach(r => { if (r.language) counts[r.language] = (counts[r.language] ?? 0) + 1; });
    return Object.entries(counts)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5);
};

export const Github = () => {
    const [user, setUser] = useState<GithubUser | null>(null);
    const [repos, setRepos] = useState<Repo[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [userRes, reposRes] = await Promise.all([
                    fetch(`https://api.github.com/users/${GITHUB_USERNAME}`),
                    fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`),
                ]);
                if (!userRes.ok || !reposRes.ok) throw new Error('GitHub API error');
                const userData: GithubUser = await userRes.json();
                const reposData: Repo[] = await reposRes.json();
                setUser(userData);
                // filter forks, sort by stars, take top 6
                setRepos(reposData.filter(r => !r.fork).sort((a, b) => b.stargazers_count - a.stargazers_count).slice(0, 6));
            } catch {
                setError(true);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    const totalStars = repos.reduce((acc, r) => acc + r.stargazers_count, 0);
    const topLangs = getTopLanguages(repos);

    return (
        <Section id="github">
            <SectionTitle title="Code Activity" subtitle="04 // GITHUB" />

            {loading && (
                <div className="flex items-center justify-center h-48 text-neutral-600 font-futuristic text-xs tracking-widest uppercase animate-pulse">
                    Fetching GitHub data...
                </div>
            )}

            {error && (
                <div className="flex items-center justify-center h-48 text-neutral-600 font-futuristic text-xs tracking-widest uppercase">
                    Could not load GitHub data — API rate limit or network error.
                </div>
            )}

            {!loading && !error && user && (
                <div className="space-y-12">

                    {/* Stats row */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <StatCard icon={<BookOpen size={20} />} value={user.public_repos} label="Public Repos" />
                        <StatCard icon={<Star size={20} />} value={totalStars} label="Total Stars" />
                        <StatCard icon={<GitCommit size={20} />} value={repos.length} label="Active Repositories" />
                        <StatCard icon={<GitCommit size={20} />} value={topLangs[0]?.[0] ?? '—'} label="Top Language" />
                    </div>

                    {/* Language bar */}
                    {topLangs.length > 0 && (
                        <div>
                            <p className="text-xs text-neutral-500 uppercase tracking-widest mb-4 font-futuristic">
                                Language breakdown
                            </p>
                            <div className="flex h-2 rounded-full overflow-hidden gap-0.5">
                                {(() => {
                                    const total = topLangs.reduce((s, [, c]) => s + c, 0);
                                    return topLangs.map(([lang, count]) => (
                                        <div
                                            key={lang}
                                            className="h-full rounded-sm transition-all"
                                            style={{
                                                width: `${(count / total) * 100}%`,
                                                backgroundColor: LANG_COLORS[lang] ?? '#888',
                                            }}
                                        />
                                    ));
                                })()}
                            </div>
                            <div className="flex flex-wrap gap-x-6 gap-y-2 mt-4">
                                {topLangs.map(([lang, count]) => {
                                    const total = topLangs.reduce((s, [, c]) => s + c, 0);
                                    return (
                                        <div key={lang} className="flex items-center gap-2">
                                            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: LANG_COLORS[lang] ?? '#888' }} />
                                            <span className="text-[11px] text-neutral-400 font-futuristic uppercase tracking-wider">
                                                {lang}
                                            </span>
                                            <span className="text-[11px] text-neutral-600">
                                                {Math.round((count / total) * 100)}%
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    )}

                    {/* Top repos grid */}
                    <div>
                        <p className="text-xs text-neutral-500 uppercase tracking-widest mb-6 font-futuristic">
                            Featured Projects
                        </p>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {FEATURED_PROJECTS.map((project, index) => (
                                <motion.a
                                    key={index}
                                    href={project.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex flex-col gap-3 p-6 border border-black/5 dark:border-white/5 bg-black/[0.02] dark:bg-white/[0.01] rounded-2xl"
                                >
                                    <h4 className="font-futuristic font-semibold text-neutral-900 dark:text-white text-sm uppercase tracking-wider">
                                        {project.name}
                                    </h4>

                                    <p className="text-xs text-neutral-500 leading-relaxed">
                                        {project.description}
                                    </p>

                                    <span className="text-[10px] text-sky-500 uppercase tracking-widest">
                                        {project.tech}
                                    </span>
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="flex justify-center">
                        <motion.a
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: 0.96 }}
                            href={`https://github.com/${GITHUB_USERNAME}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 px-8 py-4 border border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.02] rounded-full text-sm font-futuristic uppercase tracking-widest text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white hover:border-sky-500/40 transition-all"
                        >
                            <SiGithub size={18} /> View Full Profile
                        </motion.a>
                    </div>
                </div>
            )}
        </Section>
    );
};