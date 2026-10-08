import { Route, Routes, useLocation } from "react-router";
import { AnimatePresence, motion } from "motion/react";
import { Footer } from "./components/footer";
import { About, Home, NotFound, Play, Project } from "./components/pages";

const PAGE_TRANSITION_S = 0.6;

const PageWrapper = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ y: "100%" }}
    animate={{ y: 0 }}
    exit={{ opacity: 1 }}
    transition={{ duration: PAGE_TRANSITION_S, ease: [0.22, 1, 0.36, 1] }}
    className="absolute inset-0 min-h-screen w-full overflow-y-auto"
    style={{
      background:
        "linear-gradient(180deg, var(--light) 0, var(--light) 720px, var(--blue) 100%)",
      backgroundAttachment: "local",
    }}
  >
    {children}
    <Footer />
  </motion.div>
);

function App() {
  const location = useLocation();

  return (
    <main className="min-h-screen relative overflow-hidden bg-dark">
      <AnimatePresence mode="sync" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <PageWrapper>
                <Home />
              </PageWrapper>
            }
          />
          <Route
            path="/about"
            element={
              <PageWrapper>
                <About />
              </PageWrapper>
            }
          />
          <Route
            path="/play"
            element={
              <PageWrapper>
                <Play />
              </PageWrapper>
            }
          />
          <Route
            path="/project"
            element={
              <PageWrapper>
                <Project />
              </PageWrapper>
            }
          />
          <Route
            path="*"
            element={
              <PageWrapper>
                <NotFound />
              </PageWrapper>
            }
          />
        </Routes>
      </AnimatePresence>
    </main>
  );
}

export default App;
