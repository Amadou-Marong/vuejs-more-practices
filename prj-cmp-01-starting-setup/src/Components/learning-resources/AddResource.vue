<template>
    <base-card>
        <form>
            <div class="form-control">
                <label for="title">Title</label>
                <input type="text" id="title" name="title">
            </div>
            <div class="form-control">
                <label for="description">Description</label>
                <textarea name="description" id="description" rows="3"></textarea>
            </div>
            <div class="form-control">
                <label for="link">Link</label>
                <input type="url" id="link" name="link">
            </div>
            <div>
                <base-button type="submit">Add Resource</base-button>
            </div>
        </form>
    </base-card>
</template>