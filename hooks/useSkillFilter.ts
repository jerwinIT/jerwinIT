"use client";

import { useState } from "react";
import { SKILLS_MATRIX } from "@/constants/skills";
import { SKILL_FILTERS } from "@/constants/skills";
import type { SkillFilterId, SkillCategory, SkillGroup } from "@/types";

/**
 * Encapsulates all skill filtering and grouping logic.
 */
export function useSkillFilter() {
  const [activeFilter, setActiveFilter] = useState<SkillFilterId>("all");
  const [expandedGroup, setExpandedGroup] = useState<SkillCategory | null>(
    "languages",
  );

  const filteredSkills =
    activeFilter === "all"
      ? SKILLS_MATRIX
      : SKILLS_MATRIX.filter((s) => s.category === activeFilter);

  const groupedSections: SkillGroup[] = SKILL_FILTERS.filter(
    (f) => f.id !== "all",
  ).map((f) => ({
    id: f.id as SkillCategory,
    label: f.label,
    items: SKILLS_MATRIX.filter((s) => s.category === f.id),
  }));

  const selectFilter = (id: SkillFilterId) => {
    setActiveFilter(id);
    if (id !== "all") setExpandedGroup(id as SkillCategory);
  };

  const toggleGroup = (id: SkillCategory) => {
    setExpandedGroup((prev) => (prev === id ? null : id));
  };

  return {
    activeFilter,
    expandedGroup,
    filteredSkills,
    groupedSections,
    selectFilter,
    toggleGroup,
  };
}
