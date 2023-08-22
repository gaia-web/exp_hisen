function updateAttribute(node: HTMLElement, name: string, value: any) {
    if (value == null || value == +false) {
        node.removeAttribute(name);
    }
    else node.setAttribute(name, value + "");
}

//calls setAttribute or removeAttribute
export function attr(node: HTMLElement, entry: [string, any]) {
    if (entry) {
        updateAttribute(node, entry[0], entry[1]);
    }

    return {
        update(updated: [string, any]) {
            if (!updated) return;
            updateAttribute(node, updated[0], updated[1]);
        }
    }
}

//assigns the given value to the given key
export function prop(node: HTMLElement, entry: [string, any]) {
    if (entry) {
        (node as any)[entry[0]] = entry[1];
    }

    return {
        update(updated: [string, any]) {
            if (!updated) return;
            (node as any)[updated[0]] = updated[1];
        }
    }
}