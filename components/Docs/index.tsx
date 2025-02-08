"use client";

import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const DocsComponent = () => {
  const { t } = useTranslation();
  const [activeSection, setActiveSection] = useState("flowise-getting-started");

  const sections = {
    flowise: {
      title: "Flowise",
      subsections: [
        { id: "flowise-getting-started", title: "Getting Started" },
        { id: "flowise-installation", title: "Installation" },
        { id: "flowise-basics", title: "Basics" },
        { id: "flowise-templates", title: "Templates" },
        { id: "flowise-prompts", title: "Prompts" },
        { id: "flowise-requirements", title: "Requirements" },
        { id: "flowise-sources", title: "Sources" },
      ],  
      botpress: {
      title: "Botpress",
      subsections: [
        { id: "botpress-getting-started", title: "Getting Started" },
        { id: "botpress-cloud-setup", title: "Cloud Setup" },
        { id: "botpress-conversation-design", title: "Conversation Design" },
        { id: "botpress-nlu", title: "Natural Language Understanding" },
        { id: "botpress-hooks", title: "Hooks & Actions" },
      ],
    },
    },
    voiceflow: {
      title: "Voiceflow",
      subsections: [
        { id: "voiceflow-getting-started", title: "Getting Started" },
        { id: "voiceflow-basics", title: "Basics" },
        { id: "voiceflow-dialog-management", title: "Dialog Management" },
        { id: "voiceflow-integrations", title: "Integrations" },
        { id: "voiceflow-analytics", title: "Analytics" },
      ],
    },
  
    n8n: {
      title: "n8n",
      subsections: [
        { id: "n8n-getting-started", title: "Getting Started" },
        { id: "n8n-workflows", title: "Workflows" },
        { id: "n8n-nodes", title: "Nodes" },
        { id: "n8n-triggers", title: "Triggers" },
        { id: "n8n-credentials", title: "Credentials" },
      ],
    },
    make: {
      title: "Make.com",
      subsections: [
        { id: "make-getting-started", title: "Getting Started" },
        { id: "make-scenarios", title: "Scenarios" },
        { id: "make-modules", title: "Modules" },
        { id: "make-functions", title: "Functions" },
        { id: "make-webhooks", title: "Webhooks" },
      ],
    },
    langchain: {
      title: "Langchain",
      subsections: [
        { id: "langchain-getting-started", title: "Getting Started" },
        { id: "langchain-chains", title: "Chains" },
        { id: "langchain-agents", title: "Agents" },
        { id: "langchain-memory", title: "Memory" },
        { id: "langchain-embeddings", title: "Embeddings" },
      ],
    },
  };

  const getContent = (sectionId: string) => {
    // This would be replaced with actual documentation content
    const content: { [key: string]: JSX.Element } = {
      // Flowise Sections
      "flowise-getting-started": (
        <div>
          <h2 className="text-2xl font-bold mb-4">Getting Started with Flowise</h2>
          <p className="mb-4">
            Flowise is an open-source UI visual tool for building LLM flows using Langchain.js.
            Create custom AI workflows through a drag-and-drop interface without writing code.
          </p>
          <h3 className="text-xl font-semibold mb-3">Key Concepts</h3>
          <ul className="list-disc pl-6 mb-4">
            <li>Visual node-based workflow designer</li>
            <li>Pre-built integrations with LLM providers</li>
            <li>Custom chain creation and deployment</li>
          </ul>
        </div>
      ),
      "flowise-installation": (
        <div>
          <h2 className="text-2xl font-bold mb-4">Installing Flowise</h2>
          <p className="mb-4">
            Flowise can be installed via npm or Docker. Choose the method that best fits your environment:
          </p>
          <h3 className="text-xl font-semibold mb-3">npm Installation</h3>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md mb-4">
            {`npm install -g flowise
  npx flowise start`}
          </pre>
          <h3 className="text-xl font-semibold mb-3">Docker Installation</h3>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md">
            {`docker pull flowiseai/flowise
  docker run -d -p 3000:3000 flowiseai/flowise`}
          </pre>
        </div>
      ),
      "flowise-basics": (
        <div>
          <h2 className="text-2xl font-bold mb-4">Flowise Basics</h2>
          <p className="mb-4">
            Learn the fundamental concepts of building flows in Flowise:
          </p>
          <div className="grid gap-4">
            <div>
              <h3 className="text-xl font-semibold mb-2">Node Types</h3>
              <ul className="list-disc pl-6">
                <li>LLM Nodes: Connect to AI models (OpenAI, Hugging Face)</li>
                <li>Utility Nodes: Data processing and transformation</li>
                <li>Input/Output Nodes: Handle user input and API responses</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Creating a Flow</h3>
              <ol className="list-decimal pl-6">
                <li>Drag nodes from the palette</li>
                <li>Connect nodes in logical sequence</li>
                <li>Configure node parameters</li>
                <li>Test using the chat interface</li>
              </ol>
            </div>
          </div>
        </div>
      ),
      "flowise-templates": (
        <div>
          <h2 className="text-2xl font-bold mb-4">Flowise Templates</h2>
          <p className="mb-4">
            Accelerate development with pre-built templates for common use cases:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 border rounded-md">
              <h3 className="text-lg font-semibold mb-2">Customer Support Bot</h3>
              <p>Automatic ticket classification and response generation</p>
            </div>
            <div className="p-4 border rounded-md">
              <h3 className="text-lg font-semibold mb-2">Content Summarizer</h3>
              <p>URL-based content analysis and summarization</p>
            </div>
          </div>
        </div>
      ),
      "flowise-prompts": (
        <div>
          <h2 className="text-2xl font-bold mb-4">Prompt Engineering</h2>
          <p className="mb-4">
            Create effective prompts using Flowise's prompt nodes:
          </p>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold">Prompt Structure</h3>
              <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md mt-2">
                {`You are a helpful assistant specializing in {domain}.
  Current conversation history: {history}
  User question: {input}`}
              </pre>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Best Practices</h3>
              <ul className="list-disc pl-6">
                <li>Use clear instruction prefixes</li>
                <li>Include context placeholders</li>
                <li>Implement output formatting examples</li>
              </ul>
            </div>
          </div>
        </div>
      ),
      "flowise-requirements": (
        <div>
          <h2 className="text-2xl font-bold mb-4">System Requirements</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Minimum Requirements</h3>
              <ul className="list-disc pl-6">
                <li>2 CPU cores</li>
                <li>4GB RAM</li>
                <li>Node.js 18+</li>
                <li>1GB Disk space</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Recommended Setup</h3>
              <ul className="list-disc pl-6">
                <li>4 CPU cores</li>
                <li>8GB RAM</li>
                <li>Docker 20.10+</li>
                <li>SSD Storage</li>
              </ul>
            </div>
          </div>
        </div>
      ),
      "flowise-integrations": (
        <div>
          <h2 className="text-2xl font-bold mb-4">Data Sources</h2>
          <p className="mb-4">Connect Flowise to various data sources:</p>
          <div className="grid gap-4">
            <div className="p-4 border rounded-md">
              <h3 className="text-lg font-semibold mb-2">File Uploads</h3>
              <p>PDF, TXT, and CSV file processing</p>
            </div>
            <div className="p-4 border rounded-md">
              <h3 className="text-lg font-semibold mb-2">API Integration</h3>
              <p>REST API endpoints with authentication</p>
            </div>
            <div className="p-4 border rounded-md">
              <h3 className="text-lg font-semibold mb-2">Vector Databases</h3>
              <p>Pinecone, Chroma, and Weaviate connections</p>
            </div>
          </div>
        </div>
      ),
      // botpress section
      "botpress-getting-started": (
        <div>
          <h2 className="text-2xl font-bold mb-4">Getting Started with Botpress</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Platform Overview</h3>
              <p className="mb-4">
                Botpress is a friendly platform that helps you create smart chatbots without needing to be a coding expert. Think of it like building with blocks - you can create something amazing even if you're just starting out!
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 border rounded-md">
                  <h4 className="font-semibold mb-2">Key Features</h4>
                  <ul className="list-disc pl-6 space-y-3">
                    <li>
                      <span className="font-medium">Visual Flow Editor:</span> Design conversations by connecting blocks together, just like drawing a flowchart - no coding needed! You can see how your bot will respond to different situations.
                    </li>
                    <li>
                      <span className="font-medium">Built-in NLU Engine:</span> A smart system that helps your bot understand what users are saying in natural language, even when they phrase things differently or make typos.
                    </li>
                    <li>
                      <span className="font-medium">Multi-language Support:</span> Create bots that can chat in different languages and switch between them easily - perfect for talking to people from around the world.
                    </li>
                    <li>
                      <span className="font-medium">Extension System:</span> Add new features to your bot using pre-made add-ons, like connecting to WhatsApp or handling payments, without any complicated setup.
                    </li>
                    <li>
                      <span className="font-medium">Analytics Dashboard:</span> See how your bot is performing with simple charts showing what users like and where they might need help - like having a window into your bot's brain!
                    </li>
                  </ul>
                </div>
                <div className="p-4 border rounded-md">
                  <h4 className="font-semibold mb-2">Developer Tools</h4>
                  <ul className="list-disc pl-6 space-y-3">
                    <li>Simple tools to connect your bot to other apps and services</li>
                    <li>Add custom actions for special features your bot needs</li>
                    <li>Connect to other websites and services easily</li>
                    <li>Special tools to help find and fix problems</li>
                    <li>Test your bot before showing it to users</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      "botpress-conversation-design": (
        <div>
          <h2 className="text-2xl font-bold mb-4">Creating Conversations in Botpress</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Design Building Blocks</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="p-4 border rounded-md">
                  <h4 className="font-semibold mb-2">Building Your Flow</h4>
                  <ul className="list-disc pl-6 space-y-3">
                    <li>Create conversation paths using simple drag-and-drop blocks</li>
                    <li>Organize your bot's responses into easy-to-manage pieces</li>
                    <li>Set up rules for when your bot should do different things</li>
                    <li>Store and manage all your bot's messages in one place</li>
                  </ul>
                </div>
                <div className="p-4 border rounded-md">
                  <h4 className="font-semibold mb-2">Creating Messages</h4>
                  <ul className="list-disc pl-6 space-y-3">
                    <li>Use different types of messages like text, images, or buttons</li>
                    <li>Create messages that change based on user information</li>
                    <li>Write messages in multiple languages</li>
                    <li>Save and reuse common message patterns</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      "botpress-nlu": (
        <div>
          <h2 className="text-2xl font-bold mb-4">Understanding User Messages</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Smart Understanding Features</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="p-4 border rounded-md">
                  <h4 className="font-semibold mb-2">Main Capabilities</h4>
                  <ul className="list-disc pl-6 space-y-3">
                    <li>Figure out what users want, even when they say it in different ways</li>
                    <li>Pick out important information from user messages automatically</li>
                    <li>Detect which language your users are speaking</li>
                    <li>Collect all the information needed to help users step by step</li>
                  </ul>
                </div>
                <div className="p-4 border rounded-md">
                  <h4 className="font-semibold mb-2">Making Your Bot Smarter</h4>
                  <ul className="list-disc pl-6 space-y-3">
                    <li>Teach your bot new ways users might ask for things</li>
                    <li>Keep track of different versions of your bot's understanding</li>
                    <li>See how well your bot understands users</li>
                    <li>Make your bot better over time based on real conversations</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      // Voiceflow Sections
      "voiceflow-getting-started": (
        <div>
          <h2 className="text-2xl font-bold mb-4">Voiceflow Fundamentals</h2>
          <p className="mb-4">
            Voiceflow is a collaborative platform for building voice and chat assistants:
          </p>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold">First Steps</h3>
              <ol className="list-decimal pl-6">
                <li>Create a free account</li>
                <li>Choose a project template</li>
                <li>Explore the visual canvas</li>
              </ol>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Key Components</h3>
              <ul className="list-disc pl-6">
                <li>Blocks: Conversation steps</li>
                <li>Intents: User input classification</li>
                <li>Variables: Data storage and manipulation</li>
              </ul>
            </div>
          </div>
        </div>
      ),
      "voiceflow-basics": (
        <div>
          <h2 className="text-2xl font-bold mb-4">Voiceflow Features</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Core Features</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="p-4 border rounded-md">
                  <h4 className="font-semibold mb-2">Visual Conversation Design</h4>
                  <ul className="list-disc pl-6 space-y-3">
                    <li>Design conversations by simply dragging and connecting blocks - like building with LEGO!</li>
                    <li>Work together with your team in real-time, just like in Google Docs</li>
                    <li>Track changes and go back to previous versions if needed</li>
                    <li>Create your own custom blocks for special features</li>
                  </ul>
                </div>
                <div className="p-4 border rounded-md">
                  <h4 className="font-semibold mb-2">Natural Language Understanding</h4>
                  <ul className="list-disc pl-6 space-y-3">
                    <li>Your bot will understand what users want, even if they say it differently each time</li>
                    <li>Automatically detect and save important information from user messages</li>
                    <li>Remember previous conversations to provide better responses</li>
                    <li>Chat in multiple languages with built-in translation support</li>
                  </ul>
                </div>
              </div>
            </div>
    
            <div>
              <h3 className="text-lg font-semibold mb-2">Voice Agent Capabilities</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="p-4 border rounded-md">
                  <h4 className="font-semibold mb-2">Voice Features</h4>
                  <ul className="list-disc pl-6 space-y-3">
                    <li>Convert text to natural-sounding speech automatically</li>
                    <li>Understand spoken words from users with high accuracy</li>
                    <li>Verify users by their voice for secure access</li>
                    <li>Create custom voices that match your brand</li>
                  </ul>
                </div>
                <div className="p-4 border rounded-md">
                  <h4 className="font-semibold mb-2">Conversation Management</h4>
                  <ul className="list-disc pl-6 space-y-3">
                    <li>Handle back-and-forth conversations smoothly</li>
                    <li>Deal with interruptions gracefully</li>
                    <li>Have backup responses ready when needed</li>
                    <li>Create responses that adapt to the situation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    
      "voiceflow-dialog-management": (
        <div>
          <h2 className="text-2xl font-bold mb-4">Main Use Cases</h2>
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-4 border rounded-md">
                <h3 className="text-lg font-semibold mb-2">Customer Service</h3>
                <ul className="list-disc pl-6 space-y-3">
                  <li>Provide instant help to customers any time, day or night</li>
                  <li>Create and track support tickets automatically</li>
                  <li>Answer common questions quickly and accurately</li>
                  <li>Process customer requests without manual input</li>
                  <li>Connect customers to human agents when needed</li>
                </ul>
              </div>
              <div className="p-4 border rounded-md">
                <h3 className="text-lg font-semibold mb-2">Sales & Marketing</h3>
                <ul className="list-disc pl-6 space-y-3">
                  <li>Find and sort potential customers automatically</li>
                  <li>Suggest products based on customer preferences</li>
                  <li>Help customers book meetings and appointments</li>
                  <li>Run and track marketing campaigns</li>
                  <li>Help customers complete their purchases</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ),
      "voiceflow-integrations": (
        <div>
          <h2 className="text-2xl font-bold mb-4">Platform Integrations</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 border rounded-md">
              <h3 className="text-lg font-semibold mb-2">Voice Channels</h3>
              <ul className="list-disc pl-6">
                <li>Amazon Alexa</li>
                <li>Google Assistant</li>
                <li>Telephony Systems</li>
              </ul>
            </div>
            <div className="p-4 border rounded-md">
              <h3 className="text-lg font-semibold mb-2">Chat Channels</h3>
              <ul className="list-disc pl-6">
                <li>Web Chat</li>
                <li>WhatsApp</li>
                <li>Facebook Messenger</li>
              </ul>
            </div>
          </div>
        </div>
      ),
      "voiceflow-analytics": (
        <div>
          <h2 className="text-2xl font-bold mb-4">Analytics & Insights</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Key Metrics</h3>
              <ul className="list-disc pl-6">
                <li>User engagement</li>
                <li>Conversation paths</li>
                <li>Drop-off points</li>
              </ul>
            </div>
         
          </div>
        </div>
      ),

      // Add more content for other sections...
      
    };

    return content[sectionId] || <div>Content coming soon...</div>;
  };

  return (
    <div className="container mx-auto px-4">
      <div className="relative flex bg-white dark:bg-blacksection rounded-lg shadow-md min-h-screen mb-12">
        {/* Sidebar */}
        <div className="w-64 bg-gray-50 dark:bg-blacksection border-r border-stroke dark:border-strokedark sticky top-0">
          <div className="p-4">
            <h2 className="text-xl font-bold mb-4 text-black dark:text-white">Documentation</h2>
            {Object.entries(sections).map(([key, section]) => (
              <div key={key} className="mb-6">
                <h3 className="text-lg font-semibold mb-2 text-black dark:text-white">{section.title}</h3>
                <ul>
                  {section.subsections.map((subsection) => (
                    <li key={subsection.id}>
                      <button
                        onClick={() => setActiveSection(subsection.id)}
                        className={`w-full text-left px-4 py-2 rounded-md transition-colors duration-150 ${
                          activeSection === subsection.id
                            ? "bg-primary text-white"
                            : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-blacksection"
                        }`}
                      >
                        {subsection.title}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8 overflow-y-auto">
          <div className="max-w-3xl mx-auto">
            {getContent(activeSection)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocsComponent;
