<script setup lang="ts">
import axios, { AxiosError, type AxiosResponse } from 'axios';

/* data */
interface TodoItem {
    id: number
    value: string
    selected: boolean
}
const todoItems: Ref<TodoItem[]> = ref([]);
const config = useRuntimeConfig()

/* computed */
const selectedValues: ComputedRef<string[]> = computed(() => todoItems.value
    .filter((item: TodoItem) => item.selected)
    .map((item: TodoItem) => item.value)
)

const checkedItems: ComputedRef<TodoItem[]> = computed(() => todoItems.value
    .filter((item: TodoItem) => item.selected)
)

const uncheckedItems: ComputedRef<TodoItem[]> = computed(() => todoItems.value
    .filter((item: TodoItem) => !item.selected)
)

/* methods */
// modify local todo items
function addNewItem(event: KeyboardEvent) {
    const htmlElement: HTMLInputElement|null = event?.target as HTMLInputElement;
    const value: string|null = htmlElement.value;
    if (value != null && value !== "") {
        postNewItem(value);
        htmlElement.value = "";
    }
}

function selectItem(currentSelectedValues: string[]) {
    for (let item of todoItems.value) {
        const newValue = currentSelectedValues.includes(item.value);
        if (item.selected !== newValue) {
            item.selected = newValue;
            updateItem(item);
        }
    }
}

function removeItem(toRemove: TodoItem) {
    deleteItem(toRemove.id);
}

// database calls
function postNewItem(value: string) {
    Promise.resolve(axios.post(
        `${config.public.API_URL}/api/todos`,
        {
            value,
            selected: false
        }
    )).then((response: AxiosResponse<TodoItem[]>) => {
        fetchTodoItems();
    }).catch((error: AxiosError) => {
        console.error(error);
    });
} 

function updateItem(todoItem: TodoItem) {
    Promise.resolve(axios.post(
        `${config.public.API_URL}/api/todos/${todoItem.id}`,
        todoItem
    )).then((response: AxiosResponse<TodoItem[]>) => {
        fetchTodoItems();
    }).catch((error: AxiosError) => {
        console.error(error);
    });
} 

function deleteItem(toRemove: number) {
    Promise.resolve(axios.delete(
        `${config.public.API_URL}/api/todos/${toRemove}`
    )).then((response: AxiosResponse<TodoItem[]>) => {
        fetchTodoItems();
    }).catch((error: AxiosError) => {
        console.error(error);
    });
} 

function fetchTodoItems() {
    Promise.resolve(axios.get(`${config.public.API_URL}/api/todos`))
        .then((response: AxiosResponse<TodoItem[]>) => {
            todoItems.value = response.data;
        }).catch((error: AxiosError) => {
            console.error(error);
        });
}

onMounted(() => {
    fetchTodoItems();
});
</script>

<template>
    <div class="tw:flex tw:flex-col tw:gap-y-2" v-auto-animate>
        <prime-input-text class="tw:ml-6" placeholder="Add a new item" @keyup.enter="addNewItem" />
        <div class="tw:flex tw:items-center" v-for="todoItem in uncheckedItems">
            <prime-checkbox :value="todoItem.value" class="tw:mr-2" :name="todoItem.value" :model-value="selectedValues" @update:model-value="selectItem" />
            <label :for="todoItem.value">{{ todoItem.value }}</label>
            <i class="tw:grow tw:justify-self-end tw:text-right! tw:pr-2 fa-solid fa-xmark erase-icon" @click="removeItem(todoItem)"></i>
        </div>
        <div class="tw:border-b tw:border-gray-400 tw:dark:border-amber-950 tw:my-1" v-if="checkedItems.length > 0 && uncheckedItems.length > 0" ></div>
        <div class="tw:flex tw:items-center" v-for="todoItem in checkedItems">
            <prime-checkbox :value="todoItem.value" class="tw:mr-2" :name="todoItem.value" :model-value="selectedValues" @update:model-value="selectItem" />
            <label :for="todoItem.value">{{ todoItem.value }}</label>
            <i class="tw:grow tw:justify-self-end tw:text-right! tw:pr-2 fa-solid fa-xmark erase-icon" @click="removeItem(todoItem)"></i>
        </div>
    </div>
</template>