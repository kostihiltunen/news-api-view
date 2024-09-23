import { render, screen } from '@testing-library/react'
import NewsItem from './NewsItem'
import { describe, expect } from 'vitest'


test('renders content', () => {
    const newsItem = {
        title: 'Component testing title, done with react testing-library',
        description: 'Component testing description, done with react testing-library',
        content: 'Component testing content, done with react testing-library'
    }

    render(<NewsItem article={newsItem} />)

    const element = screen.getByText('Component testing title, done with react testing-library')
    expect(element).toBeDefined()
    const desc = screen.getByText('Component testing description, done with react testing-library')
    expect(desc).toBeDefined()
    const cont = screen.getByText('Component testing content, done with react testing-library')
    expect(cont).toBeDefined()
})

test('renders content with no article content', () => {
    const newsItem = {
        title: 'Component testing title, done with react testing-library',
        description: 'Component testing description, done with react testing-library'
    }

    render(<NewsItem article={newsItem} />)

    const element = screen.getByText('Component testing title, done with react testing-library')
    expect(element).toBeDefined()
    const desc = screen.getByText('Component testing description, done with react testing-library')
    expect(desc).toBeDefined()
})

test('renders content with no description and article content', () => {
    const newsItem = {
        title: 'Component testing title, done with react testing-library',
    }

    render(<NewsItem article={newsItem} />)

    const element = screen.getByText('Component testing title, done with react testing-library')
    expect(element).toBeDefined()

})