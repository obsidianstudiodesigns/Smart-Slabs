import React, { useState } from 'react';
import { PROJECTS_GALLERY } from '../data/solutionsData';
import { ProjectItem } from '../types';
import { 
  Building2, 
  MapPin, 
  Layers, 
  Maximize2, 
  Sparkles, 
  ArrowRight,
  X
} from 'lucide-react';

interface ProjectsGalleryProps {
  onOpenQuoteModal: (data?: any) => void;
}

export const ProjectsGallery: React.FC<ProjectsGalleryProps> = ({ onOpenQuoteModal }) => {
  const [filter, setFilter] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const categories = ['All', 'Hollowcore', 'Rib & Block', 'Insitu', 'Staircases', 'Commercial'];

  const filteredProjects = filter === 'All'
    ? PROJECTS_GALLERY
    : PROJECTS_GALLERY.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-24 bg-[#070a0f] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#5da832]/15 border border-[#5da832]/30 text-[#70c03b] text-xs font-bold uppercase tracking-widest">
              <Building2 className="w-3.5 h-3.5" />
              <span>Proven Track Record</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Featured <span className="text-[#65a30d]">Projects & Installations</span>
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Explore residential homes, commercial office developments, and architectural staircases 
              supplied and erected by Smart Slabs across Bloemfontein and the Free State.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  filter === cat
                    ? 'bg-[#5da832] text-white shadow-md shadow-[#5da832]/30'
                    : 'bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setActiveModalProject(project)}
              className="group rounded-2xl bg-[#141b26] border border-white/10 overflow-hidden cursor-pointer shadow-xl hover:border-[#70c03b]/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#5da832]/10 flex flex-col justify-between"
            >
              <div className="relative h-60 w-full overflow-hidden bg-slate-900">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-90"
                />

                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-md bg-[#070a0e]/85 backdrop-blur-md text-[11px] font-bold text-[#70c03b] border border-white/15">
                    {project.category}
                  </span>
                </div>

                <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="p-2 rounded-lg bg-black/70 text-white backdrop-blur-sm">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-[#141b26] via-transparent to-transparent" />
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-1.5 text-xs text-slate-400">
                    <MapPin className="w-3.5 h-3.5 text-[#70c03b]" />
                    <span>{project.location}</span>
                    <span className="text-slate-600">•</span>
                    <span className="text-[#70c03b] font-semibold">{project.area}</span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-[#70c03b] transition-colors leading-snug">
                    {project.title}
                  </h3>

                  <p className="text-xs text-slate-300 line-clamp-2">
                    {project.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-[#70c03b]">
                  <span>View Project Details</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Lightbox Modal */}
        {activeModalProject && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in"
            onClick={() => setActiveModalProject(null)}
          >
            <div 
              className="relative w-full max-w-2xl bg-[#141b26] border border-white/20 rounded-2xl shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-72 w-full">
                <img
                  src={activeModalProject.image}
                  alt={activeModalProject.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setActiveModalProject(null)}
                  className="absolute top-4 right-4 p-2 rounded-xl bg-black/60 hover:bg-black/90 text-white backdrop-blur-sm"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 sm:p-7 space-y-4">
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <span className="px-2.5 py-1 rounded bg-[#5da832]/20 text-[#70c03b] font-bold">
                    {activeModalProject.category}
                  </span>
                  <MapPin className="w-3.5 h-3.5 text-[#70c03b] ml-2" />
                  <span>{activeModalProject.location}</span>
                  <span>•</span>
                  <span className="text-white font-bold">{activeModalProject.area}</span>
                </div>

                <h3 className="text-2xl font-bold text-white">
                  {activeModalProject.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {activeModalProject.description}
                </p>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs text-slate-400">
                    Smart Slabs Bloemfontein
                  </span>
                  <button
                    onClick={() => {
                      const proj = activeModalProject;
                      setActiveModalProject(null);
                      onOpenQuoteModal({ additionalNotes: `Inquiry regarding project reference: ${proj.title}` });
                    }}
                    className="px-5 py-2.5 rounded-xl bg-[#5da832] hover:bg-[#68bd37] text-white text-xs font-bold shadow-lg"
                  >
                    Quote Similar Project
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
