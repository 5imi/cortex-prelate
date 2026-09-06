import os
from crewai import Agent, Task, Crew, Process
from crewai_tools import FileReadTool, DirectoryReadTool, SerperDevTool

# IMPORTANT: Conectează la serverul tău Ollama local
os.environ["OPENAI_API_BASE"] = 'http://localhost:11434/v1'
os.environ["OPENAI_MODEL_NAME"] = 'gpt-oss:latest'  # Modelul default pentru toți agenții
os.environ["OPENAI_API_KEY"] = 'NA' # Obligatoriu, dar poate fi orice valoare

# Definește uneltele pe care le pot folosi agenții
# DirectoryReadTool() - citește structura unui folder
# FileReadTool() - citește un fișier
# SerperDevTool() - poate căuta pe internet (opțional, necesită API key de la serper.dev)
file_tool = FileReadTool()
dir_tool = DirectoryReadTool()


# Definește "Echipa" ta de agenți
web_developer = Agent(
  role='Senior Web Developer',
  goal='Creează cod HTML, CSS și JavaScript funcțional și curat, pe baza cerințelor.',
  backstory="Ești un programator web cu experiență, specializat în a construi aplicații de la zero.",
  verbose=True,
  allow_delegation=False,
  tools=[file_tool, dir_tool]
)

ux_designer = Agent(
  role='UX/UI Designer',
  goal='Creează fișiere CSS care sunt estetice și ușor de utilizat, pe baza feedback-ului.',
  backstory="Ești un designer talentat, cu un ochi pentru culori și layout-uri moderne.",
  verbose=True,
  allow_delegation=True,
  tools=[file_tool, dir_tool]
)

# Definește Sarcinile
create_structure_task = Task(
  description=(
    "Creează structura de bază pentru un site de management hotelier. "
    "Trebuie să creezi un fișier `index.html` cu un titlu, un `<h1>` și o structură de bază. "
    "Creează și un fișier `style.css` gol."
  ),
  expected_output='Fișierele index.html și style.css create în folderul curent.',
  agent=web_developer
)

design_task = Task(
  description=(
    "Aplică un design simplu și modern site-ului. "
    "Modifică fișierul `style.css` pentru a adăuga o culoare de fundal (`background-color`) pentru `body` "
    "și pentru a centra textul din `<h1>`. Folosește culori plăcute."
  ),
  expected_output='Fișierul style.css modificat cu stiluri de bază.',
  agent=ux_designer,
  context=[create_structure_task] # Această sarcină depinde de finalizarea celei de dinainte
)

# Asamblează "Echipajul" (Crew)
hotel_crew = Crew(
  agents=[web_developer, ux_designer],
  tasks=[create_structure_task, design_task],
  verbose=True, # Afișează tot procesul de gândire <-- AICI A FOST CORECTAT
  process=Process.sequential
)

# Pornește Echipajul!
result = hotel_crew.kickoff()

print("\n\n########################")
print("## Rezultatul final:")
print(result)