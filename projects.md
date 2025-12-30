---
layout: page
title: "Projects"
# subtitle: "Selected builds spanning AI, backend systems, and web experiences."
permalink: /projects/
---
<div class="grid cards">
  {% for project in site.data.projects %}
  <article class="card project-card">
    <div class="card-body">
      <p class="eyebrow">{{ project.category | default: "Build" }}</p>
      <h3>{{ project.name }}</h3>
      <p>{{ project.summary }}</p>
      <div class="tags">
        {% for tech in project.tech %}
        <span class="pill">{{ tech }}</span>
        {% endfor %}
      </div>
    </div>
    <div class="card-actions">
      <a class="btn ghost" href="{{ '/projects/' | append: project.slug | append: '/' | relative_url }}">Details</a>
      <a class="btn text" href="{{ project.repo }}" target="_blank" rel="noreferrer">Repo →</a>
    </div>
  </article>
  {% endfor %}
</div>
