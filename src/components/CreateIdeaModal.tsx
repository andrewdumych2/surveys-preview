import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { usePrototype } from "../state/PrototypeContext";
import type { NewIdeaPayload, Team } from "../types/models";
import { Button } from "./ui/Button";
import { Input, Textarea } from "./ui/Input";
import { Modal } from "./ui/Modal";
import { Select } from "./ui/Select";

interface CreateIdeaModalProps {
  open: boolean;
  onClose: () => void;
  onCreated: (ideaName: string) => void;
}

interface FormErrors {
  name?: string;
  summary?: string;
}

const INITIAL_FORM: NewIdeaPayload = {
  name: "",
  summary: "",
  team: "Product"
};

export function CreateIdeaModal({
  open,
  onClose,
  onCreated
}: CreateIdeaModalProps) {
  const navigate = useNavigate();
  const { createIdea } = usePrototype();
  const [form, setForm] = useState<NewIdeaPayload>(INITIAL_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  function resetState() {
    setForm(INITIAL_FORM);
    setErrors({});
    setIsSubmitting(false);
  }

  function handleClose() {
    resetState();
    onClose();
  }

  function validate() {
    const nextErrors: FormErrors = {};

    if (!form.name.trim()) {
      nextErrors.name = "Give the concept a clear name.";
    }

    if (form.summary.trim().length < 16) {
      nextErrors.summary = "Add a little more detail so reviewers understand the value.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    const createdIdea = await createIdea(form);
    onCreated(createdIdea.name);
    handleClose();
    navigate(`/ideas/${createdIdea.id}`);
  }

  return (
    <Modal
      open={open}
      onClose={handleClose}
      title="Create a new concept"
      description="Capture a testable idea with enough detail to review the interaction and narrative."
    >
      <form className="modal-form" onSubmit={handleSubmit}>
        <Input
          id="idea-name"
          label="Concept name"
          placeholder="Adaptive onboarding"
          value={form.name}
          error={errors.name}
          onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))}
        />
        <Textarea
          id="idea-summary"
          label="Summary"
          placeholder="Describe the user problem, the proposed interaction, and what success looks like."
          rows={4}
          value={form.summary}
          error={errors.summary}
          onChange={(event) =>
            setForm((current) => ({ ...current, summary: event.target.value }))
          }
        />
        <Select
          id="idea-team"
          label="Owning team"
          value={form.team}
          onChange={(event) =>
            setForm((current) => ({ ...current, team: event.target.value as Team }))
          }
        >
          <option value="Growth">Growth</option>
          <option value="Product">Product</option>
          <option value="Ops">Ops</option>
        </Select>
        <div className="modal-actions">
          <Button type="button" variant="ghost" onClick={handleClose}>
            Cancel
          </Button>
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Creating..." : "Create prototype"}
          </Button>
        </div>
      </form>
    </Modal>
  );
}
